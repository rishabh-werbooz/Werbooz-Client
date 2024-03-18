"use client"

import React, { useLayoutEffect, useCallback, useEffect, useState, useMemo, useRef } from "react"

import { useMediaQuery, useTheme, Progress, VStack, Button, Flex, Box } from "@chakra-ui/react"
import { motion, useAnimation, useMotionValue } from "framer-motion"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill, BsArrowRightCircle } from "react-icons/bs"
import { SlArrowLeftCircle } from "react-icons/sl"

function percentage(x: number, y: number) {
    return 100 / (y / x)
}

const debounce = (limit: number, callback: Function) => {
    let timeoutId: NodeJS.Timeout

    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(callback, limit, args)
    }
}

function getDimensionObject(node) {
    const rect = node.getBoundingClientRect()
    return {
        width: rect.width,
        height: rect.height,
        top: rect.top,
        left: rect.left,
        x: rect.x,
        y: rect.y,
        right: rect.right,
        bottom: rect.bottom,
    }
}

function useBoundingRect(limit?: number) {
    const [dimensions, setDimensions] = useState({})
    const [node, setNode] = useState(null)

    const ref = useCallback(node => {
        setNode(node)
    }, [])

    useLayoutEffect(() => {
        if ("undefined" !== typeof window && node) {
            const measure = () => window.requestAnimationFrame(() => setDimensions(getDimensionObject(node)))

            measure()

            const listener = debounce(limit ? limit : 100, measure)

            window.addEventListener("resize", listener)
            window.addEventListener("scroll", listener)
            return () => {
                window.removeEventListener("resize", listener)
                window.removeEventListener("scroll", listener)
            }
        }
    }, [node, limit])

    return [ref, dimensions, node]
}

const MotionFlex = motion(Flex)

const transitionProps = {
    stiffness: 400,
    type: "spring",
    damping: 60,
    mass: 3,
}

interface ChakraCarouselProps {
    children: React.ReactNode[]
    gap: number
}

const ChakraCarousel: React.FC<ChakraCarouselProps> = ({ children, gap }) => {
    
    const [trackIsActive, setTrackIsActive] = useState(false)
    const [multiplier, setMultiplier] = useState(0.35)
    const [sliderWidth, setSliderWidth] = useState(0)
    const [activeItem, setActiveItem] = useState(0)
    const [constraint, setConstraint] = useState(0)
    const [itemWidth, setItemWidth] = useState(0)

    const initSliderWidth = useCallback((width: number) => setSliderWidth(width), [])

    const positions = useMemo(() => children.map((_, index) => -Math.abs((itemWidth + gap) * index)), [children, itemWidth, gap]) 

    const { breakpoints } = useTheme()
    

    const [isBetweenBaseAndMd] = useMediaQuery(`(min-width: ${breakpoints.base}) and (max-width: ${breakpoints.md})`)

    const [isBetweenMdAndXl] = useMediaQuery(`(min-width: ${breakpoints.md}) and (max-width: ${breakpoints.xl})`)

    const [isGreaterThanXL] = useMediaQuery(`(min-width: ${breakpoints.xl})`)

    useEffect(() => {
        if (isBetweenBaseAndMd) {
            setItemWidth(sliderWidth - gap)
            setMultiplier(0.65)
            setConstraint(1)
        }
        if (isBetweenMdAndXl) {
            setItemWidth(sliderWidth / 2 - gap)
            setMultiplier(0.5)
            setConstraint(2)
        }
        if (isGreaterThanXL) {
            setItemWidth(sliderWidth / 3 - gap)
            setMultiplier(0.35)
            setConstraint(3)
        }
    }, [isBetweenBaseAndMd, isBetweenMdAndXl, isGreaterThanXL, sliderWidth, gap])

    const sliderProps = {
        setTrackIsActive,
        initSliderWidth,
        setActiveItem,
        activeItem,
        constraint,
        itemWidth,
        positions,
        gap,
    }

    const trackProps = {
        setTrackIsActive,
        trackIsActive,
        setActiveItem,
        sliderWidth,
        activeItem,
        constraint,
        multiplier,
        itemWidth,
        positions,
        gap,
    }

    const itemProps = {
        setTrackIsActive,
        trackIsActive,
        setActiveItem,
        activeItem,
        constraint,
        itemWidth,
        positions,
        gap,
    }

    return (
        <Slider {...sliderProps}>
            <Track {...trackProps}>
                {children.map((child, index) => (
                    <Item {...itemProps} index={index} key={index}>
                        {child}
                    </Item>
                ))}
            </Track>
        </Slider>
    )
}

interface SliderProps {
    setTrackIsActive: React.Dispatch<React.SetStateAction<boolean>>
    initSliderWidth: React.Dispatch<React.SetStateAction<number>>
    setActiveItem: React.Dispatch<React.SetStateAction<number>>
    activeItem: number
    constraint: number
    itemWidth: number
    positions: number[]
    children: React.ReactNode
    gap: number
}

const Slider: React.FC<SliderProps> = ({ setTrackIsActive, initSliderWidth, setActiveItem, activeItem, constraint, itemWidth, positions, children, gap }) => {
    const [ref, { width }] = useBoundingRect()

    useLayoutEffect(() => initSliderWidth(Math.round(width)), [width, initSliderWidth])

    const handleFocus = () => setTrackIsActive(true)

    const handleDecrementClick = () => {
        setTrackIsActive(true)
        !(activeItem === positions.length - positions.length) && setActiveItem(prev => prev - 1)
    }

    const handleIncrementClick = () => {
        setTrackIsActive(true)
        !(activeItem === positions.length - constraint) && setActiveItem(prev => prev + 1)
    }

    return (
        <>
            <Flex justifyContent="flex-end" mr={10}>
                <Button onClick={handleDecrementClick} onFocus={handleFocus} mr={`${gap / 3}px`} color="gray.200" variant="link" minW={0}>
                    <BsArrowLeftCircleFill className="text-primary" style={{ width: "30px", height: "30px" }} />
                </Button>

                <Button onClick={handleIncrementClick} onFocus={handleFocus} ml={`${gap / 3}px`} color="gray.200" variant="link" zIndex={2} minW={0}>
                    <BsArrowRightCircleFill className="text-primary" style={{ width: "30px", height: "30px" }} />
                </Button>
            </Flex>
            <Box ref={ref as React.RefObject<HTMLDivElement>} overflow="hidden" p={6}>
                {children}
            </Box>
        </>
    )
}

interface TrackProps {
    setTrackIsActive: React.Dispatch<React.SetStateAction<boolean>>
    trackIsActive: boolean
    setActiveItem: React.Dispatch<React.SetStateAction<number>>
    activeItem: number
    constraint: number
    multiplier: number
    itemWidth: number
    positions: number[]
    children: React.ReactNode
}

const Track: React.FC<TrackProps> = ({ setTrackIsActive, trackIsActive, setActiveItem, activeItem, constraint, multiplier, itemWidth, positions, children }) => {
    const [dragStartPosition, setDragStartPosition] = useState(0)
    const controls = useAnimation()
    const x = useMotionValue(0)
    const node = useRef(null)

    const handleDragStart = () => setDragStartPosition(positions[activeItem])

    const handleDragEnd = (_, info) => {
        console.log(info)
        const distance = info.offset.x
        const velocity = info.velocity.x * multiplier
        const direction = velocity < 0 || distance < 0 ? 1 : -1

        const extrapolatedPosition = dragStartPosition + (direction === 1 ? Math.min(velocity, distance) : Math.max(velocity, distance))

        const closestPosition = positions.reduce((prev, curr) => {
            return Math.abs(curr - extrapolatedPosition) < Math.abs(prev - extrapolatedPosition) ? curr : prev
        }, 0)

        if (!(closestPosition < positions[positions.length - constraint])) {
            setActiveItem(positions.indexOf(closestPosition))
            controls.start({
                x: closestPosition,
                transition: {
                    velocity: info.velocity.x,
                    ...transitionProps,
                },
            })
        } else {
            setActiveItem(positions.length - constraint)
            controls.start({
                x: positions[positions.length - constraint],
                transition: {
                    velocity: info.velocity.x,
                    ...transitionProps,
                },
            })
        }
    }

    const handleResize = useCallback(
        () =>
            controls.start({
                x: positions[activeItem],
                transition: {
                    ...transitionProps,
                },
            }),
        [activeItem, controls, positions]
    )

    const handleClick = useCallback(event => (node.current.contains(event.target) ? setTrackIsActive(true) : setTrackIsActive(false)), [setTrackIsActive])

    const handleKeyDown = useCallback(
        event => {
            if (trackIsActive) {
                if (activeItem < positions.length - constraint) {
                    if (event.key === "ArrowRight" || event.key === "ArrowUp") {
                        event.preventDefault()
                        setActiveItem(prev => prev + 1)
                    }
                }
                if (activeItem > positions.length - positions.length) {
                    if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
                        event.preventDefault()
                        setActiveItem(prev => prev - 1)
                    }
                }
            }
        },
        [trackIsActive, setActiveItem, activeItem, constraint, positions.length]
    )

    useEffect(() => {
        handleResize(positions)

        document.addEventListener("keydown", handleKeyDown)
        document.addEventListener("mousedown", handleClick)
        return () => {
            document.removeEventListener("keydown", handleKeyDown)
            document.removeEventListener("mousedown", handleClick)
        }
    }, [handleClick, handleResize, handleKeyDown, positions])

    return (
        <>
            {itemWidth && (
                <VStack ref={node} spacing={5} alignItems="stretch">
                    <MotionFlex
                        dragConstraints={node}
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                        animate={controls}
                        style={{ x }}
                        drag="x"
                        _active={{ cursor: "grabbing" }}
                        minWidth="min-content"
                        flexWrap="nowrap"
                        cursor="grab"
                    >
                        {children}
                    </MotionFlex>
                </VStack>
            )}
        </>
    )
}

interface ItemProps {
    setTrackIsActive: React.Dispatch<React.SetStateAction<boolean>>
    setActiveItem: React.Dispatch<React.SetStateAction<number>>
    activeItem: number
    constraint: number
    itemWidth: number
    positions: number[]
    children: React.ReactNode
    index: number
    gap: number
}

const Item: React.FC<ItemProps> = ({ setTrackIsActive, setActiveItem, activeItem, constraint, itemWidth, positions, children, index, gap }) => {
    const [userDidTab, setUserDidTab] = useState(false)

    const handleFocus = () => setTrackIsActive(true)

    const handleBlur = () => {
        userDidTab && index + 1 === positions.length && setTrackIsActive(false)
        setUserDidTab(false)
    }

    const handleKeyUp = event => event.key === "Tab" && !(activeItem === positions.length - constraint) && setActiveItem(index)

    const handleKeyDown = event => event.key === "Tab" && setUserDidTab(true)

    return (
        <Flex
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyUp={handleKeyUp}
            onKeyDown={handleKeyDown}
            w={`350px`}
            _notLast={{
                mr: `${gap}px`,
            }}
            py="4px"
        >
            {children}
        </Flex>
    )
}

export default ChakraCarousel
