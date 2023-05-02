import Image from "next/image";
import styles from '@/styles/Home.module.css';
const About = () => {
    return(
       <>
       <section className="d-flex flex-row">
        <div className={styles.aboutImg}>
        <Image
        className="rounded-end"
        src='/bluemon.JPG'
        alt="cool monitor with a blue background"
        sizes="(max-width: 2560px) 22vw,"
        fill
        />
        </div>
        <p className="w-50 p-2 border border-primary">
         TopDev blog is a great place to go if you want to read about the latest tech news and trends
        </p>
       </section>
       <section className="d-flex flex-row">
        <p className="w-50 p-2 border border-dark">
            At TopDev blog we focus on websites web apps as well as all things tech. 
        </p>
        <div className={styles.aboutImg}>
        <Image
        className="rounded-start"
        src='/redmon.JPG'
        alt="cool monitor with a red background"
        sizes="(max-width: 2560px) 22vw,"
        fill
        />
        </div>
       </section>
       <section className="d-flex flex-row">
       <div className={styles.aboutImg}>
        <Image
        className="rounded-end"
        src='/purplemon.JPG'
        alt="cool monitor with a blue background"
        sizes="(max-width: 2560px) 22vw,"
        fill
        />
        </div>
        <p className="w-50 p-2 border border">
        Along with the effects this has on
        our world our busineses and lives.
        </p>
       </section>
       </>
    );
};

export default About;