import styles from "./listitems.module.css"
import Heading from "@/components/Heading/Heading_v1"
import Heading_v2 from "@/components/Heading/Heading_v2"
const index = () => {
    return (
        <div className={styles.ListContainer}>
            <div>
                <div className="mb-1">
                    <Heading
                        data={{
                            heading: "Company",
                        }}
                        className={`fw-700 font-lg ${styles.ListHead}`}
                        variant="center"
                    />
                </div>

                <Heading_v2
                    headingData={[
                        { heading: "About Us", color: "#181433" },
                        {
                            heading: "Careers",
                            color: "#181433",
                        },
                        {
                            heading: "Blog",
                            color: "#181433",
                        },
                        {
                            heading: "Pricing",
                            color: "#181433",
                        },
                    ]}
                    break={true}
                    className={`fw-400 font-md`}
                />
            </div>
            <div>
                <div className="mb-1">
                    <Heading
                        data={{
                            heading: "Resources",
                        }}
                        className={`fw-700 font-lg ${styles.ListHead}`}
                        variant="center"
                    />
                </div>
                <Heading_v2
                    headingData={[
                        { heading: "Templates", color: "#181433" },
                        {
                            heading: "Tutorials",
                            color: "#181433",
                        },
                        {
                            heading: "Free resources",
                            color: "#181433",
                        },
                        {
                            heading: "Contract templates",
                            color: "#181433",
                        },
                    ]}
                    break={true}
                    className={`fw-400 font-md mt-05`}
                />
            </div>
        </div>
    )
}

export default index
