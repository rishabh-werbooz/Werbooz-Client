import styles from './listitems.module.css'
import Heading from '@/components/Heading'
const index = () => {
    return (
        <div className={styles.ListContainer}>
            <div>
                <Heading
                    data={{
                        heading: 'Company',
                    }}
                    className={`${styles.ListHead} font-lg fw-700`}
                />
                <Heading
                    data={{
                        heading: 'About Us',
                    }}
                    className={styles.ListItems}
                />
                <Heading
                    data={{
                        heading: 'Careers',
                    }}
                    className={styles.ListItems}
                />
                <Heading
                    data={{
                        heading: 'Blog',
                    }}
                    className={styles.ListItems}
                />
                <Heading
                    data={{
                        heading: 'Pricing',
                    }}
                    className={styles.ListItems}
                />
            </div>
            <div>
                <Heading
                    data={{
                        heading: 'Resources',
                    }}
                    className={`${styles.ListHead} font-lg fw-700`}
                />
                <Heading
                    data={{
                        heading: 'Templates',
                    }}
                    className={styles.ListItems}
                />
                <Heading
                    data={{
                        heading: 'Tutorials',
                    }}
                    className={styles.ListItems}
                />
                <Heading
                    data={{
                        heading: 'Free resources',
                    }}
                    className={styles.ListItems}
                />
                <Heading
                    data={{
                        heading: 'Contract templates',
                    }}
                    className={styles.ListItems}
                />
            </div>
        </div>
    )
}

export default index
