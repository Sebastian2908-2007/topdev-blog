import Image from "next/image";
import styles from '@/styles/Home.module.css';
const About = () => {
    return(
       <>
       <section className={styles.hero}>
        <Image
          className="rounded-end"
          src='/anime-me.png'
          alt="AI version of topdevs fearless founder"
          sizes="(max-width: 2560px) 22vw,"
          fill
        />
       </section>
       <section className="d-flex flex-row mt-5">
        <div className={styles.aboutImg}>
        <Image
        className="rounded-end"
        src='/bluemon.JPG'
        alt="cool monitor with a blue background"
        sizes="(max-width: 2560px) 22vw,"
        fill
        />
        </div>
        <p className="w-50 p-2 p-sm-5 border border rounded-start text-white font-weight-bold shadow-lg">
         TopDev blog is a great place to go if you want to read about tech news and trends
        </p>
       </section>
       <section className="d-flex flex-row mt-5 ">
        <p className="w-50 p-2 border border rounded-end p-sm-5 text-white font-weight-bold shadow-lg">
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
       <section className="d-flex flex-row mt-5 mb-5">
       <div className={styles.aboutImg}>
        <Image
        className="rounded-end"
        src='/purplemon.JPG'
        alt="cool monitor with a blue background"
        sizes="(max-width: 2560px) 22vw,"
        fill
        />
        </div>
        <p className="w-50 p-2 border border rounded-start p-sm-5 text-white shadow-lg">
        Along with the effects this has on
        our world our businesses and our lives.
        </p>
       </section>
       </>
    );
};

export default About;