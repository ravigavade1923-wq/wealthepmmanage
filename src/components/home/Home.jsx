import React, { useEffect, useRef, useState } from "react";
import "./Home.css";

import { gsap } from "gsap";

import emailjs from "@emailjs/browser";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import customizeImg from "../../assets/home/customize.png";
import technicalImg from "../../assets/home/technical.png";
import transperenImg from "../../assets/home/transperen.png";
import dataImg from "../../assets/home/data.png";
import Navbar from "../navbar/Navbar";

const features = [
  {
    id: 1,
    bgImage:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop",
    title: "Customized For You",
    description: "Easy and simple to understand tailor-made solutions for you",
    meta: "PERSONALISED SOLUTIONS",
  },
  {
    id: 2,
    bgImage:
      "https://i.pinimg.com/1200x/cf/d6/4c/cfd64ce861ac53a14454d78e2fb887f7.jpg",
    title: "Technically Driven",
    description: "User oriented digital transaction anytime anywhere",
    meta: "DIGITAL TRANSACTIONS",
  },
  {
    id: 3,
    bgImage:
      "https://i.pinimg.com/1200x/a3/0b/82/a30b821e4c209dd782047c93d6493386.jpg",
    title: "Transparent And Client Centric",
    description: "Track where and how your money is invested at all times",
    meta: "CLIENT-FIRST APPROACH",
  },
  {
    id: 4,
    bgImage:
      "https://i.pinimg.com/1200x/7e/21/57/7e21579b68aa0406cd85ea6bc89852b2.jpg",
    title: "Data-Driven",
    description: "Powered by return, guided by data",
    meta: "SMART ANALYTICS",
  },
];

const articles = [
  {
    id: 1,
    type: "ARTICLE",
    meta: "CIO'S DESK · 03 MARCH 2026",
    title: "Understanding the Iran–Israel–U.S. Conflict",
    desc: "The unfolding geopolitical tensions and their impact on markets.",
    image:
      "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=900&q=80&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 2,
    type: "ARTICLE",
    meta: "",
    title: "Union Budget 2026–27 Decoded",
    date: "03 February 2026",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=75&auto=format&fit=crop",
  },
  {
    id: 3,
    type: "ARTICLE · CIO'S DESK",
    meta: "",
    title: "Where does gold go from here?",
    date: "20 January 2026",
    image:
      "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400&q=75&auto=format&fit=crop",
  },
  {
    id: 4,
    type: "ARTICLE · CIO'S DESK",
    meta: "",
    title: "The GIFT City Advantage",
    date: "20 January 2026",
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&q=75&auto=format&fit=crop",
  },
  {
    id: 5,
    type: "ARTICLE · CIO'S DESK",
    meta: "",
    title: "Silver: Protecting Gains, Avoiding FOMO",
    date: "20 January 2026",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=75&auto=format&fit=crop",
  },
];

const awardsData = [
  {
    year: "2026",
    title: "Tanish Gupta — Forbes 50 over 50",
    brand: "FORBES GLOBAL",
    badge: "🏆",
    brandImage:
      "https://images.openai.com/static-rsc-4/ND1U9Sy-VM1cQOvat5sETu9QZJTRrpCy1W0stzrXqryjiPXYBlbY1tnoADqkTqC-yVUiKrY0GMh8EgASUKjzPrp2R51i0kgxKa-HF088fkArYYgqquBxrqpHJ32TpxevnZT2w5LKVIH4_Qje7eRug_-2IEsf153gdlIOLhF8qyn9iDakLJ3PbviJCt8EqfPE?purpose=fullsize",
    subtitle:
      "Our awards are a matter of great pride for us. Recognition is natural when our services and processes have added significant value to our clients' lives and businesses.",
  },
  {
    year: "2025",
    title: "ET Best Wealth Management Firms",
    brand: "ECONOMIC TIMES",
    badge: "🥇",
    brandImage:
      "https://images.openai.com/static-rsc-4/I2er9fcvBgBl97dQN-d5hn4MsxWOHSTrxGKOzWTxbIWENxDGgTq8dwvwDJCaZvkEYQnfkBGUfgsX-okNTufefR0xCfliBeXp69kQbn00cQb16uZwFOc-215XwzjqvoHK8g-YDKwdrGBr0qi7YVZRqt_pQjLfbVvdAR4VKNpLzL1Yb3LYMsYC235Iv_EVo5RB?purpose=fullsize",
    subtitle:
      "Our awards are a matter of great pride for us. Recognition is natural when our services and processes have added significant value to our clients' lives and businesses.",
  },
  {
    year: "2024",
    title: "CNBCTV18 Wealth Excellence Award",
    brand: "CNBCTV18",
    badge: "💎",
    brandImage:
      "https://images.openai.com/static-rsc-4/s1wMGULdyZk4luITS89SF3RxfnQ8UWo5Rwq0ez6H8sJ1QhVWB_M2hiVsjQoKxgXqgNTYyDOx353c6q9yF2WJPAyJ5ru0FaVU2eGHJkZKfoA3-xvMYzLPL6g_11xcbPESRLZk-VpUBR8915ii_KC4IoQdMKeixhleAPTACFIDwK3rwpZN61GocjYwfyAUlu11?purpose=fullsize",
    subtitle:
      "Our awards are a matter of great pride for us. Recognition is natural when our services and processes have added significant value to our clients' lives and businesses.",
  },
  {
    year: "2023",
    title: "Business Standard Elite Partner",
    brand: "BUSINESS STANDARD",
    badge: "🏆",
    brandImage:
      "https://i.pinimg.com/736x/5a/31/a8/5a31a851279a2579b93a6568c4ebe46e.jpg",
    subtitle:
      "Our awards are a matter of great pride for us. Recognition is natural when our services and processes have added significant value to our clients' lives and businesses.",
  },
  {
    year: "2022",
    title: "Mint Best Wealth Advisory Firm",
    brand: "MINT",
    badge: "🥇",
    brandImage:
      "https://i.pinimg.com/736x/c3/aa/65/c3aa65380e715d04e60b2eac4551a18d.jpg",
    subtitle:
      "Our awards are a matter of great pride for us. Recognition is natural when our services and processes have added significant value to our clients' lives and businesses.",
  },
  {
    year: "2021",
    title: "Outlook Money Best Wealth Manager",
    brand: "OUTLOOK MONEY",
    badge: "🏅",
    brandImage:
      "https://images.openai.com/static-rsc-4/4g69hb_jR7Yu3t-UcfeqMi1pWkCSO6-OhJ4qjYCwWsV44pFQ_zyMgq64p07A4WO291JNonL0vfPjODJOr9fMB-43ZBuknzje31K049TcIeLDmoXpqhqq5KlsUYvPaELYECnJHSeFrn3fVFY-g261apk8Bs85NqzhSITl4RvZJzFWqhXIfannz6rFZ1chpZZQ?purpose=inline",
    subtitle:
      "Our awards are a matter of great pride for us. Recognition is natural when our services and processes have added significant value to our clients' lives and businesses.",
  },
  {
    year: "2020",
    title: "Financial Express Wealth Leadership Honour",
    brand: "FINANCIAL EXPRESS",
    badge: "⭐",
    brandImage:
      "https://images.openai.com/static-rsc-4/Js72B_FTNHjrceNSHUvPDCBlYXkOBixQOGKGOtyDdhnxTG2ilOcv3Up_VSaZ2d9t94HQm6qMEK2rPHvTvUqFUJKSErnretdYmAo2KT6htHWm49AYAziuZ3evftBqbTm-uX1TuiXOu_BPc55OaRjzqroQ0afk3_71U6RaOKxXcI8-zgFYPgpn84sF7MBbhe7w?purpose=fullsize",
    subtitle:
      "Our awards are a matter of great pride for us. Recognition is natural when our services and processes have added significant value to our clients' lives and businesses.",
  },
  {
    year: "2019",
    title: "ET Wealth Investment Excellence",
    brand: "ECONOMIC TIMES",
    badge: "🎗️",
    brandImage:
      "https://lh3.googleusercontent.com/p/AF1QipO6y70RCkvFOgjVOiSwa8lh52dWG0Gy2Y1EnbMm=s1360-w1360-h1020-rw",
    subtitle:
      "Our awards are a matter of great pride for us. Recognition is natural when our services and processes have added significant value to our clients' lives and businesses.",
  },
  {
    year: "2018",
    title: "Bloomberg Wealth Strategy Recognition",
    brand: "BLOOMBERG",
    badge: "🏆",
    brandImage:
      "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEacS0_nYixjjgbWNTR3J6-xfm77PczqpRO8W9CT6HTNJ7EIWP1s8g8Nj4FmBPJA-xlwQi7CHy4ERTizi2tGFT2O5UiJMofgWvLs5pxNPp8CBYNmSomLd31aEzFSVwxfETouv667w=s1360-w1360-h1020-rw",
    subtitle:
      "Our awards are a matter of great pride for us. Recognition is natural when our services and processes have added significant value to our clients' lives and businesses.",
  },
  {
    year: "2017",
    title: "Business Today Advisory Excellence",
    brand: "BUSINESS TODAY",
    badge: "🥇",
    brandImage:
      "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGiym3nGeCRmkQSvEFUz7J4MWCvLhTUsyCSHScGQNuuiTK-_87Tp04rLzM8bW6XY6-jmvLc8vXrOQroTcnSp8OWtQzd7cpY6hFiiA6p3XRxB3rfoT6dHtmRBhS01NrMJicVXt2K=s1360-w1360-h1020-rw",
    subtitle:
      "Our awards are a matter of great pride for us. Recognition is natural when our services and processes have added significant value to our clients' lives and businesses.",
  },
  {
    year: "2016",
    title: "Moneycontrol Emerging Wealth Award",
    brand: "MONEYCONTROL",
    badge: "🏅",
    brandImage:
      "https://lh3.googleusercontent.com/p/AF1QipPERNQuOznfKMFHXExsiJwRda63tG5xdei98ZCc=s1360-w1360-h1020-rw",
    subtitle:
      "Our awards are a matter of great pride for us. Recognition is natural when our services and processes have added significant value to our clients' lives and businesses.",
  },
];

const galleryImages = [
  "https://epmwealth.com/wp-content/uploads/2023/06/epm-award-8.jpeg",
  "https://epmwealth.com/wp-content/uploads/2023/06/epm-award-7.jpeg",
  "https://epmwealth.com/wp-content/uploads/2023/06/epm-award-6.jpeg",
  "https://epmwealth.com/wp-content/uploads/2023/06/epm-award-5.jpeg",
  "https://epmwealth.com/wp-content/uploads/2023/06/epm-award-3.jpeg",
  "https://epmwealth.com/wp-content/uploads/2023/06/epm-award-2.jpeg",
  "https://epmwealth.com/wp-content/uploads/2023/06/epm-award-1.jpeg",
  "https://epmwealth.com/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-01-at-12.36.49-PM.jpeg",
];

const duplicatedGalleryImages = [...galleryImages, ...galleryImages];

const coreValuesData = [
  {
    id: 1,
    letter: "R",
    title: "RELATIONSHIP",
    description:
      "We build lasting partnerships grounded in trust, transparency, and a genuine commitment to long-term success.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 2,
    letter: "I",
    title: "INTEGRITY",
    description:
      "Every recommendation is unbiased and fully aligned with the client's interest. Complete transparency, always.",
    image:
      "https://i.pinimg.com/1200x/44/0c/94/440c94130b3a3043b5074d057ef4ada6.jpg",
  },
  {
    id: 3,
    letter: "S",
    title: "SIMPLICITY",
    description:
      "We distil the complex world of finance into clear, actionable insights. Clarity over complexity, always.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 4,
    letter: "K",
    title: "KNOWLEDGE",
    description:
      "Deep expertise across asset classes, geographies, and generations drives our advice and research.",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=900&q=80&auto=format&fit=crop",
  },
];

const responsibleInvestingData = {
  label: "RESPONSIBLE INVESTING",
  heading: `Our
responsible
vision for a
better &
brighter
future`,
  description:
    "As capital allocators, we recognize the impact of our investment advice on the world around us. We are committed to enabling our clients to allocate their capital in a manner that fully optimises opportunities and minimizes risks to environmental, social, and governance (ESG) factors.",
  buttonText: "EXPLORE ESG",
  image:
    "https://i.pinimg.com/736x/63/9e/e3/639ee35bff684daae04742635936bb72.jpg",
};

const testimonialsData = [
  {
    id: 1,
    name: "Jitender Singh",
    role: "Inspector , Delhi Police",
    image:
      "https://epmwealth.com/wp-content/uploads/2023/05/Jitender-Singh.jpg",
    quote:
      "One stop solution for all my family's financial needs . I am really happy with their service and would recommend them",
  },
  {
    id: 2,
    name: "CA Amit Aggarwal",
    role: "Chartered Accountant",
    image: "https://epmwealth.com/wp-content/uploads/2023/05/Amit-Aggarwal.jpg",
    quote:
      "It's nice to have one place to come to, without being too large or institutional. I feel like you know the whole picture under one roof .It's Peace of mind with EPM Wealth.",
  },
  {
    id: 3,
    name: "Garvita Sadhwani",
    role: "Actress/Influencer",
    image:
      "https://epmwealth.com/wp-content/uploads/2023/05/Garvita-Sadhwani.jpg",
    quote:
      "For me, investing was a dream, but also a phobia. EPM Wealth team is very co-operative and has done an excellent job of transforming my investment mindset.",
  },
  {
    id: 4,
    name: "Jaideep Dudani",
    role: "Apple Products Distributor , North India",
    image:
      "https://epmwealth.com/wp-content/uploads/2023/05/Jaideep-Dudani.jpg",
    quote:
      "It's been a pleasure to deal with EPM team. Financial knowledge, attention to detail and communication are amazing. I've recommended EPM Wealth to family members who are now also happy clients.",
  },
  {
    id: 5,
    name: "Shantanu Gupta",
    role: "Managing Director of Roots Group of Institutes",
    image:
      "https://epmwealth.com/wp-content/uploads/2023/05/Shantanu-Gupta.jpg",
    quote:
      " I am grateful to have EPM WEALTH as my financial advisor . Their services have always been exceptional in every way",
  },
  {
    id: 6,
    name: "Himanshu Verma ",
    role: "Venture Capitalist",
    image:
      "https://epmwealth.com/wp-content/uploads/2023/05/Himanshu-Verma.jpg",
    quote:
      "It is such a relief to have someone you can trust completely looking after your portfolio. Their advice has always been beneficial to us and we would definitely recommend them to everyone.",
  },
  {
    id: 7,
    name: "Akash Chaudhary",
    role: "Ace fitness trainer",
    image:
      "https://epmwealth.com/wp-content/uploads/2023/05/Aakash-Chadhary.jpg",
    quote:
      "My financial education was O when I first met the EPM Wealth team. They have been very helpful in educating me and managing my finances.",
  },
];

/* Count Up Hook */
const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [startAnim, setStartAnim] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnim(true);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(currentRef);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startAnim) return;

    let start = 0;
    const stepTime = 16;
    const totalSteps = duration / stepTime;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [startAnim, end, duration]);

  return [count, ref];
};

const Home = () => {
  const [aum, ref4] = useCountUp(150);
  const [years, ref1] = useCountUp(30);
  const [clients, ref2] = useCountUp(1000);
  const [cities, ref3] = useCountUp(2);

  const featuredArticle = articles.find((item) => item.featured);
  const bottomArticles = articles.filter((item) => !item.featured);

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [activeYear, setActiveYear] = useState("2022");
  const [counts, setCounts] = useState([0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const currentTestimonial = testimonialsData[activeTestimonial];

  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const quoteRef = useRef(null);
  const clientRowRef = useRef(null);
  const imageWrapRef = useRef(null);
  const dotsRef = useRef(null);
  const autoSlideRef = useRef(null);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const activeData =
    awardsData.find((item) => item.year === activeYear) || awardsData[0];

  useEffect(() => {
    const section = statsRef.current;
    if (!section || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);

          statsData.forEach((stat, index) => {
            let start = 0;
            const duration = 1800;
            const incrementTime = 20;
            const totalSteps = duration / incrementTime;
            const increment = stat.end / totalSteps;

            const counter = setInterval(() => {
              start += increment;

              setCounts((prev) => {
                const updated = [...prev];
                updated[index] =
                  start >= stat.end ? stat.end : Math.floor(start);
                return updated;
              });

              if (start >= stat.end) {
                clearInterval(counter);
              }
            }, incrementTime);
          });

          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    autoSlideRef.current = setInterval(() => {
      setActiveTestimonial((prev) =>
        prev === testimonialsData.length - 1 ? 0 : prev + 1,
      );
    }, 4500);

    return () => clearInterval(autoSlideRef.current);
  }, []);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [
          ".testimonials-mini-label",
          ".testimonials-luxury-header h2",
          cardRef.current,
          quoteRef.current,
          clientRowRef.current,
          dotsRef.current,
        ],
        {
          opacity: 0,
          y: 40,
        },
      );

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(".testimonials-mini-label", {
        opacity: 1,
        y: 0,
        duration: 0.6,
      })
        .to(
          ".testimonials-luxury-header h2",
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.3",
        )
        .to(
          cardRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.25",
        )
        .to(
          quoteRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.35",
        )
        .to(
          clientRowRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.35",
        )
        .to(
          dotsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          },
          "-=0.3",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!quoteRef.current || !imageWrapRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      quoteRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 },
    ).fromTo(
      imageWrapRef.current,
      { opacity: 0, x: -18, rotateY: -15 },
      { opacity: 1, x: 0, rotateY: 0, duration: 0.55 },
      "-=0.3",
    );

    return () => tl.kill();
  }, [activeTestimonial]);

  const resetAutoSlide = () => {
    clearInterval(autoSlideRef.current);
    autoSlideRef.current = setInterval(() => {
      setActiveTestimonial((prev) =>
        prev === testimonialsData.length - 1 ? 0 : prev + 1,
      );
    }, 4500);
  };

  const handleDotClick = (index) => {
    setActiveTestimonial(index);
    resetAutoSlide();
  };

  const handleMouseMove = (e) => {
    if (window.innerWidth <= 768 || !cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 14;
    const rotateX = (y / rect.height - 0.5) * -14;

    gsap.to(card, {
      rotateX,
      rotateY,
      duration: 0.35,
      ease: "power2.out",
      transformPerspective: 1400,
      transformOrigin: "center",
    });

    gsap.to(imageWrapRef.current, {
      rotateY: rotateY * 1.2,
      rotateX: rotateX * 1.2,
      duration: 0.35,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power3.out",
    });

    gsap.to(imageWrapRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;

    if (diff > 50) {
      setActiveTestimonial((prev) =>
        prev === testimonialsData.length - 1 ? 0 : prev + 1,
      );
      resetAutoSlide();
    } else if (diff < -50) {
      setActiveTestimonial((prev) =>
        prev === 0 ? testimonialsData.length - 1 : prev - 1,
      );
      resetAutoSlide();
    }
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter email address");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          user_email: email,
          to_name: "Ravindra",
          message: `New vault subscription received from: ${email}`,
        },
        "YOUR_PUBLIC_KEY",
      );

      setMessage("Subscription successful");
      setEmail("");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <section className="hero-section">
        <div className="hero-social-bar">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="hero-social-icon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Youtube"
            className="hero-social-icon"
          >
            <FaYoutube />
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="hero-social-icon"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hero-social-icon"
          >
            <FaLinkedinIn />
          </a>
        </div>

        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-grid"></div>

        <div className="hero-shape hero-shape-left"></div>
        <div className="hero-shape hero-shape-right"></div>
        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>

        <div className="hero-container">
          <div className="hero-content-card">
            <div className="hero-image-text">
              <h1 className="hero-title">
                <span className="hero-title-line hero-title-tark">
                  Excelsior
                </span>
                <span className="hero-title-line hero-title-accent">
                  Pinnacle
                </span>
                <span className="hero-title-line hero-title-dark">
                  Minds <small>Pvt. Ltd.</small>
                </span>
              </h1>

              <p className="hero-tagline">
                Because Your Wealth Deserves Excellence
              </p>

              <div className="hero-action-row">
                <Link to="/about" className="hero-btn hero-btn-primary">
                  ABOUT US <span>→</span>
                </Link>

                <Link to="/contact" className="hero-btn hero-btn-secondary">
                  START CONVERSATION <span>→</span>
                </Link>
              </div>

              <div className="hero-contact-strip">
                <a
                  href="https://epmwealth.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  🌐 epmwealth.com
                </a>
                <a href="tel:+9198999 39333">📞 +91 98999 39333</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item" ref={ref4}>
            <h2>₹{aum} Cr</h2>
            <p>AUM</p>
          </div>
          <div className="stat-item" ref={ref2}>
            <h2>{clients}+</h2>
            <p>UNIQUE CLIENTS Served</p>
          </div>

          <div className="stat-item" ref={ref1}>
            <h2>{years}+</h2>
            <p>Combined Team Experience</p>
          </div>

          <div className="stat-item" ref={ref3}>
            <h2>{cities}</h2>
            <p>Strategic Global Locations</p>
          </div>
        </div>
      </section>

      <section className="solutions-section">
        <div className="solutions-container">
          <div className="solutions-left">
            <span className="solutions-label">SOLUTIONS</span>
            <h2>
              Helping you create an
              <br />
              enduring legacy
            </h2>
            <Link to="/contact" className="solutions-link">
              START THE CONVERSATION <span>→</span>
            </Link>
          </div>

          <div className="solutions-right">
            <p>
              Wealth Advisory is beyond just building a portfolio. By serving
              some of India's most prominent business families since 2011, we
              have learnt the importance of taking a holistic, global yet
              personalised approach to meeting our clients' wealth management
              needs.
            </p>

            <p>
              Combining our in-depth knowledge and innovative technology, we
              create a plan tailored to your complex needs. Your financial
              consultant — backed by an experienced team — can help you navigate
              every important decision.
            </p>
          </div>
        </div>
      </section>

      <section className="decision-section">
        <div className="decision-container">
          <div className="decision-top-row">
            <div className="decision-heading-wrap">
              <span className="decision-mini-label">SERVICES</span>
              <h2 className="decision-heading">
                Financial Decisions Made Simpler For Every Indian
              </h2>
            </div>

            <div className="decision-intro">
              <p>
                Our financial services are tailored to your unique wealth
                creation journey. Explore bespoke solutions designed for your
                specific goals.
              </p>
            </div>
          </div>

          <div className="decision-grid">
            {features.map((item) => (
              <div
                className="decision-card"
                key={item.id}
                style={{ backgroundImage: `url(${item.bgImage})` }}
              >
                <div className="decision-card-bg"></div>
                <div className="decision-card-dark-layer"></div>
                <div className="decision-card-blur-panel"></div>

                <div className="decision-card-content">
                  <span className="decision-card-meta">{item.meta}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <div className="decision-card-footer">
                    <span className="decision-card-label">EXPLORE SERVICE</span>
                    <span className="decision-card-arrow">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vault-section">
        <div className="vault-container">
          <div className="vault-top-grid">
            <div className="vault-left-panel">
              <span className="vault-label">VAULT</span>

              <h2 className="vault-heading">
                Your access to
                <br />
                rich insights
              </h2>

              <p className="vault-description">
                From experienced partners at the forefront of today&apos;s
                financial trends and beyond. Trusted by the top 0.01% of the
                country.
              </p>

              <a href="#contact" className="vault-link">
                Explore Vault <span>→</span>
              </a>

              <div className="vault-signup-box">
                <h3>Sign up for priority access</h3>
                <p>Get our insights delivered straight to your inbox.</p>

                <form className="vault-form" onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" disabled={loading}>
                    {loading ? "SENDING..." : "SUBSCRIBE →"}
                  </button>
                </form>

                {message && <p className="vault-form-message">{message}</p>}
              </div>
            </div>

            <div className="vault-featured-card">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="vault-featured-image"
              />

              <div className="vault-featured-overlay"></div>

              <div className="vault-featured-content">
                <span>
                  {featuredArticle.type} · {featuredArticle.meta}
                </span>
                <h3>{featuredArticle.title}</h3>
                <p>{featuredArticle.desc}</p>
              </div>
            </div>
          </div>

          <div className="vault-bottom-grid">
            {bottomArticles.map((item, index) => (
              <article
                className={`vault-article-card ${index === 0 ? "first-vault-card" : ""}`}
                key={item.id}
              >
                <div className="vault-article-image-wrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`vault-article-image ${index === 0 ? "fit-image" : ""}`}
                  />
                </div>

                <div className="vault-article-content">
                  <span className="vault-article-type">{item.type}</span>
                  <h4>{item.title}</h4>
                  <p>{item.date}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="awards-showcase-section">
        <div className="awards-showcase-container">
          <div className="awards-showcase-top">
            <span className="awards-mini-label">AWARDS</span>

            <h2 className="awards-main-heading">
              Journey driven by
              <br />
              Results
            </h2>

            <p className="awards-main-description">{activeData.subtitle}</p>

            <div className="awards-highlight-card">
              <span className="awards-highlight-year">{activeData.year}</span>
              <h3>{activeData.title}</h3>
              <div className="awards-badge-icon">{activeData.badge}</div>
              <span className="awards-brand">{activeData.brand}</span>
            </div>

            <div className="awards-timeline">
              {awardsData.map((item) => (
                <button
                  key={item.year}
                  className={`awards-year-btn ${
                    activeYear === item.year ? "active" : ""
                  }`}
                  onClick={() => setActiveYear(item.year)}
                >
                  {item.year}
                </button>
              ))}
            </div>
          </div>

          <div className="awards-year-work-section">
            <div className="awards-detail-card">
              <span className="awards-card-label">YEAR HIGHLIGHTS</span>
              <h4>Recognition in {activeData.year}</h4>

              <div className="awards-brand-image-wrap">
                <div className="awards-brand-image-card">
                  <img
                    src={activeData.brandImage}
                    alt={activeData.brand}
                    className="awards-brand-image"
                  />
                  <div className="awards-brand-image-overlay">
                    <span>{activeData.brand}</span>
                    <p>{activeData.title}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="awards-gallery-section">
              <div className="awards-gallery-head">
                <span></span>
                {/* <h4>Moments of Recognition</h4> */}
              </div>

              <div className="awards-gallery-marquee">
                <div className="awards-horizontal-scroll-track">
                  {duplicatedGalleryImages.map((img, index) => (
                    <div className="awards-gallery-card" key={index}>
                      <img src={img} alt={`Award gallery ${index + 1}`} />
                      <div className="awards-gallery-card-overlay">
                        <span>AWARDS</span>
                        <p>Moments of Recognition</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="core-values-section">
        <div className="core-values-container">
          <div className="core-values-top">
            <div className="core-values-top-left">
              <span className="core-values-label">CORE VALUES</span>
              <h2 className="core-values-heading">We believe in RISK</h2>
            </div>

            <div className="core-values-top-right">
              <p>
                Our four core values form the foundation of every client
                relationship and every investment decision we make.
              </p>
            </div>
          </div>

          <div className="core-values-grid">
            {coreValuesData.map((item, index) => (
              <div
                className={`core-value-card core-value-card-${index + 1}`}
                key={item.id}
              >
                <div className="core-value-image-wrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="core-value-image"
                  />
                  <div className="core-value-image-overlay"></div>
                  <span className="core-value-letter">{item.letter}</span>
                </div>

                <div className="core-value-content">
                  <span className="core-value-title">{item.title}</span>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="responsible-section">
        <div className="responsible-bg-wrap">
          <img
            src={responsibleInvestingData.image}
            alt="Responsible investing background"
            className="responsible-bg-image"
          />

          <div className="responsible-bg-overlay"></div>
          <div className="responsible-side-glow"></div>
        </div>

        <div className="responsible-container">
          <div className="responsible-content-card">
            <span className="responsible-label">
              {responsibleInvestingData.label}
            </span>

            <h2 className="responsible-heading">
              {responsibleInvestingData.heading}
            </h2>

            <p className="responsible-description">
              {responsibleInvestingData.description}
            </p>

            <a href="#contact" className="responsible-link">
              {responsibleInvestingData.buttonText} <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="testimonials-luxury-section" ref={sectionRef}>
        <span className="testimonials-orb testimonials-orb-1"></span>
        <span className="testimonials-orb testimonials-orb-2"></span>

        <div className="testimonials-luxury-container">
          <div className="testimonials-luxury-header">
            <span className="testimonials-mini-label">CLIENT TESTIMONIALS</span>
            <h2>PEOPLE ARE TALKING</h2>
          </div>

          <div
            className="testimonials-luxury-card"
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="testimonials-card-glow"></div>
            <div className="testimonials-card-noise"></div>

            <div className="testimonials-quote-wrap" ref={quoteRef}>
              <div className="testimonials-quote-layer">
                <span className="testimonials-premium-quote">“</span>

                <p className="testimonials-main-quote">
                  {currentTestimonial.quote}
                </p>
              </div>
            </div>

            <div className="testimonials-client-row" ref={clientRowRef}>
              <div
                className="testimonials-client-image-wrap"
                ref={imageWrapRef}
              >
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="testimonials-client-image"
                />
                <span className="testimonials-image-accent">✦</span>
              </div>

              <div className="testimonials-client-info">
                <h3>{currentTestimonial.name}</h3>
                <p>{currentTestimonial.role}</p>
              </div>
            </div>

            <div className="testimonials-progress-bar">
              <span
                className="testimonials-progress-fill"
                key={activeTestimonial}
              ></span>
            </div>

            <div className="testimonials-dots-row" ref={dotsRef}>
              {testimonialsData.map((item, index) => (
                <button
                  key={item.id}
                  className={`testimonials-dot ${
                    activeTestimonial === index ? "active" : ""
                  }`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
