import styles from './listitems.module.css'
const index = () => {
    return (
        <div className={styles.ListContainer}>
            <div>
                <h1 className={styles.ListHead}>Company</h1>
                <h3 className={styles.ListItems}>About Us</h3>
                <h3 className={styles.ListItems}>Careers</h3>
                <h3 className={styles.ListItems}>Blog</h3>
                <h3 className={styles.ListItems}>Pricing</h3>
            </div>
            <div>
                <h1 className={styles.ListHead}>Resources</h1>
                <h3 className={styles.ListItems}>Templates</h3>
                <h3 className={styles.ListItems}>Tutorials</h3>
                <h3 className={styles.ListItems}>Free resources</h3>
                <h3 className={styles.ListItems}>Contract templates</h3>
            </div>
        </div>
    )
}

export default index
