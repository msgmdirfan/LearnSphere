const lectures = [
    {
        "id": "1",
        "summary": "HTML",
        "url": "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
        "topics": [
            { "title": "Introduction to HTML", "videoUrl": "https://youtu.be/LGQuIIv2RVA?si=TlX0_CJ-mwxTrXaR" },
            { "title": "HTML Elements and Attributes", "videoUrl": "https://youtu.be/XXrpsQqAlIQ?si=kQAJaeDOjkkU4_KE" },
            { "title": "Forms and Input Fields", "videoUrl": "https://youtu.be/2O8pkybH6po?si=-zoAUWB7r0WYsD6R" }
        ],
        "additionalTopics": [
            { "title": "HTML5 Semantic Elements", "videoUrl": "https://youtu.be/kX3TfdUqpuU?si=F_aUXMvDAmXxX3-Q" },
            { "title": "Tables and Lists", "videoUrl": "https://youtu.be/7dmzYVBu1GI?si=HBUL1EyvEo69bBcd" }
        ],
        "totalDuration": "9hrs:15min",
        "originalCost": "$99",
        "discountCost": "$79",
        "instructor": "John Smith"
    },
    {
        "id": "3",
        "summary": "CSS",
        "url": "https://img.icons8.com/?size=100&id=YjeKwnSQIBUq&format=png&color=000000",
        "topics": [
            { "title": "Selectors and Specificity", "videoUrl": "https://youtu.be/Oh0TplG4nYw?si=l6EDm8NHfn962Zme" },
            { "title": "Flexbox and Grid", "videoUrl": "https://youtu.be/41ZBkZUVApc?si=5-L2gAuv9I_G2Rkp" },
            { "title": "CSS Transitions and Animations", "videoUrl": "https://youtu.be/Nloq6uzF8RQ?si=G18oM79aGEcLF34n" }
        ],
        "additionalTopics": [
            { "title": "Responsive Design (Media Queries)", "videoUrl": "https://youtu.be/K24lUqcT0Ms?si=VsmvefA2ro_MlbJG" },
            { "title": "CSS Preprocessors (SASS, LESS)", "videoUrl": "https://youtu.be/5hNDzcpWwFM?si=kFtilvqNCJaBDRMb" }
        ],
        "totalDuration": "9hrs:55min",
        "originalCost": "$119",
        "discountCost": "$95",
        "instructor": "Babar Ali"
    },
    {
        "id": "4",
        "summary": "JavaScript",
        "url": "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
        "topics": [
            { "title": "JavaScript Basics", "videoUrl": "https://youtu.be/lkIFF4maKMU?si=LkyHa1STczQ-9HRw" },
            { "title": "Asynchronous JavaScript", "videoUrl": "https://youtu.be/Coyy79wRz_s?si=UVXR04olP1NGbE8z" },
            { "title": "ES6+ Features", "videoUrl": "https://youtu.be/fl-_6d18DN0?si=mvCoM-pV2xfMfs0m" }
        ],
        "additionalTopics": [
            { "title": "DOM Manipulation", "videoUrl": "https://youtu.be/y17RuWkWdn8?si=9MaSeZAA_uGrbd6d" },
            { "title": "Event Handling in JavaScript", "videoUrl": "https://youtu.be/YiOlaiscqDY?si=cuDVfZt-SgTdm5CC" }
        ],
        "totalDuration": "10hrs:20min",
        "originalCost": "$129",
        "discountCost": "$99",
        "instructor": "Thomas Babington"
    },
    {
        "id": "6",
        "summary": "React",
        "url": "https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000",
        "topics": [
            { "title": "Components and Props", "videoUrl": "https://youtu.be/UAssn1S0UkU?si=6n5o2-c8HUP8QCqG" },
            { "title": "React Hooks", "videoUrl": "https://youtu.be/LOH1l-MP_9k?si=UPyt8GwHQhU9g4qM" },
            { "title": "State Management with Redux", "videoUrl": "https://youtu.be/_shA5Xwe8_4?si=HOwcdJy5omxDXTrO" }
        ],
        "additionalTopics": [
            { "title": "React Router for Navigation", "videoUrl": "https://youtu.be/oTIJunBa6MA?si=vJji0xkUA5nVLuRD" },
            { "title": "Performance Optimization in React", "videoUrl": "https://youtu.be/laf64Ms0yV4?si=Cp6rHdIFb42QxIrs" }
        ],
        "totalDuration": "10hrs:25min",
        "originalCost": "$139",
        "discountCost": "$109",
        "instructor": "Edward Teach"
    },
    {
        "id": "9",
        "summary": "MongoDB",
        "url": "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000",
        "topics": [
            { "title": "CRUD Operations", "videoUrl": "https://youtu.be/ByuhQncSuAQ?si=Xxh-vjk6Lqbdv1fS" },
            { "title": "Indexing & Performance Optimization", "videoUrl": "https://youtu.be/D14wWW9EEx8?si=BMoPwWjrxdxXHKY2" },
            { "title": "Aggregation Framework", "videoUrl": "https://youtu.be/SUZKhBvxW5c?si=XGpt-ThvjVN3BMEv" }
        ],
        "additionalTopics": [
            { "title": "Security & Authentication in MongoDB", "videoUrl": "https://youtu.be/lRPCgog3kmQ?si=r5Zm7fYPAv2OdauC" },
            { "title": "Integrating MongoDB with Node.js", "videoUrl": "https://youtu.be/ACUXjXtG8J4?si=kkFMaYJs2ICzI4ao" }
        ],
        "totalDuration": "10hrs:10min",
        "originalCost": "$119",
        "discountCost": "$89",
        "instructor": "Sophia Lee"
    },
    {
        "id": "7",
        "summary": "Java",
        "url": "https://img.icons8.com/?size=100&id=13679&format=png&color=000000",
        "topics": [
            { "title": "OOP Concepts in Java", "videoUrl": "https://youtu.be/pTB0EiLXUC8?si=gEyVUichjDf6T54R" },
            { "title": "Multithreading & Concurrency", "videoUrl": "https://youtu.be/r_MbozD32eo?si=MNAMVbzacKtiuYgR" },
            { "title": "Java Collections Framework", "videoUrl": "https://youtu.be/viTHc_4XfCA?si=DMsMORskNTQ1vjCx" }
        ],
        "additionalTopics": [
            { "title": "Exception Handling in Java", "videoUrl": "https://youtu.be/1XAfapkBQjk?si=B34rDHLxaF7r2CUc" },
            { "title": "Lambda Expressions & Streams", "videoUrl": "https://youtu.be/tj5sLSFjVj4?si=D_GbnXKgtOn-YeSJ" }
        ],
        "totalDuration": "10hrs:25min",
        "originalCost": "$149",
        "discountCost": "$119",
        "instructor": "Chris Taylor"
    },
    {
        "id": "8",
        "summary": "Node.js",
        "url": "https://img.icons8.com/?size=100&id=54087&format=png&color=000000",
        "topics": [
            { "title": "Node.js Basics", "videoUrl": "https://youtu.be/ENrzD9HAZK4?si=PI_x4uUe9DfiCTIF" },
            { "title": "Express.js Framework", "videoUrl": "https://youtu.be/SccSCuHhOw0?si=VnesF1l3jIPJ6qIb" },
            { "title": "REST API Development with Node.js", "videoUrl": "https://youtu.be/l8WPWK9mS5M?si=OAt3ijIHHmdRZ8tW" }
        ],
        "additionalTopics": [
            { "title": "Middleware in Express.js", "videoUrl": "https://youtu.be/lY6icfhap2o?si=b34INb5bTmP4VgrY" },
            { "title": "Authentication & JWT in Node.js", "videoUrl": "https://youtu.be/mbsmsi7l3r4?si=s1vRszKYBX1TGsvz" }
        ],
        "totalDuration": "10hrs:25min",
        "originalCost": "$139",
        "discountCost": "$109",
        "instructor": "Emily Davis"
    },
    {
        "id": "5",
        "summary": "Bootstrap",
        "url": "https://img.icons8.com/?size=100&id=EzPCiQUqWWEa&format=png&color=000000",
        "topics": [
            { "title": "Bootstrap Grid System", "videoUrl": "https://youtu.be/Wqu-d_b3K-0?si=HwulyifrlB86_oEX" },
            { "title": "Bootstrap Components", "videoUrl": "https://youtu.be/IwlAhfeSnp8?si=79LRjkq4mpO4e3q5" },
            { "title": "Bootstrap Utilities", "videoUrl": "https://youtu.be/nCeHeA7IsvU?si=BElkSkj6vrZc0UuU" }
        ],
        "additionalTopics": [
            { "title": "Bootstrap Forms & Validation", "videoUrl": "https://youtu.be/dKVX22GR7zQ?si=DTCcAvejDog3i2uI" },
            { "title": "Bootstrap Themes & Customization", "videoUrl": "https://youtu.be/6Ovw43Dkp44?si=OOSP7_zksxbQFptA" }
        ],
        "totalDuration": "9hrs:55min",
        "originalCost": "$109",
        "discountCost": "$89",
        "instructor": "Michael Brown"
    },
    {
        "id": "2",
        "summary": "Python",
        "url": "https://img.icons8.com/?size=100&id=l75OEUJkPAk4&format=png&color=000000",
        "topics": [
            { "title": "Introduction to Python", "videoUrl": "https://youtu.be/4EaYeZyzIB0?si=VbdbBe0RriqrHnKk" },
            { "title": "Data Types and Variables", "videoUrl": "https://youtu.be/R83OfbQeB7M?si=bIZRCFLTOtKSzpMw" },
            { "title": "Control Flow and Loops", "videoUrl": "https://youtu.be/zgX2eza08I4?si=_NUGIn13IihZDmtr" }
        ],
        "additionalTopics": [
            { "title": "Functions and Modules", "videoUrl": "https://youtu.be/fV7_VZtvTV4?si=5km2FWiQM1HiFS7Y" },
            { "title": "File Handling in Python", "videoUrl": "https://youtu.be/aequTxAvQq4?si=QFYrbq3B0XT5XHK3" }
        ],
        "totalDuration": "9hrs:35min",
        "originalCost": "$99",
        "discountCost": "$79",
        "instructor": "Jane Doe"
    }
]
export default lectures;
