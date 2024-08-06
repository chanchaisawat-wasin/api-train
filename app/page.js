const express = require('express')
const mysql = require('mysql');
const cors = require('cors');

const app = express()
const port = 5000

const corsOptions = {
  origin: 'http://localhost:3000',
  cresdentials: true,
};

app.use(cors(corsOptions));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "test"
});

con.connect(function (err) {
  if (err) {
    console.error("CONNECTION ERROR :::", err)
    return
  }
  console.log('CONNECTION Succcess')
});

// app.use(function(req, res, next) {
// res.header("Access-Control-Allow-Origin", "*");
// res.header("Access-Control-Allow-Headers", "Origin, X-Requrested-With, Content-Type, Accept");
// });

let nav = {
  img: [{
    logo: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_N_Health_d5a05fd0a9/thumbnail_update_N_Health_d5a05fd0a9.png"
  }],
  items: [
    {
      label: "แพ็กเกจ และโปรโมชั่น",
      url: "#"
    },
    {
      label: "บริการของเรา",
      url: "#"
    },
    {
      label: "บทความ",
      url: "#"
    },
    {
      label: "ข่าวสาร และกิจกรรม",
      url: "#",
    },
    {
      label: "เกี่ยวกับเรา",
      children: [
        {
          label: 'บริษัท',
          url: '#'
        },
        {
          label: 'ประวัติ',
          url: '#'
        },
        {
          label: 'ผลงาน และการรับรอง',
          url: '#'
        }
      ]
    },
    {
      label: "ติดต่อเรา",
      url: "#",
    }
  ],
  language: [
    {
      label: "TH"
    },
    {
      label: "EN"
    }
  ]
};

let paragram =
  [{
    url: "https://storage.googleapis.com/nh-dev/2024/6/medium_NH_Tagline_TH_1_fc5315b4ad/medium_NH_Tagline_TH_1_fc5315b4ad.png",
    label: "N Health (เอ็น เฮลท์) เป็นบริษัทในเครือ BDMS ที่ให้บริการด้านการสนับสนุนทางการแพทย์ และธุรกิจโรงพยาบาลให้แก่โรงพยาบาลชั้นนำ ครอบคลุมการให้บริการมากกว่า 80 สาขา ทั้งในประเทศ และต่างประเทศ โดยเรามุ่งมั่นที่จะสร้างความได้เปรียบในการแข่งขันให้แก่โรงพยาบาล และองค์กรด้านสุขภาพของประเทศไทย ด้วยบริการที่มีคุณภาพ ได้แก่ บริการห้องปฏิบัติการขั้นสูง บริการงานปราศจากเชื้อที่มีคุณภาพสูง การบริหารจัดการผ้าโรงพยาบาลแบบครบวงจร บริการวิศวกรรมการแพทย์ที่มีความเชี่ยวชาญ การบริหารซัพพลายเชน และคลังสินค้า บริการขนส่ง รวมถึงตัวแทนจัดจําหน่ายอุปกรณ์และเครื่องมือแพทย์ ที่จะช่วยดูแลผู้คนให้มีคุณภาพชีวิต และสุขภาพที่ดีอย่างยั่งยืนนอกจากนี้ เรายังได้จัดตั้งศูนย์ตรวจสุขภาพ ชื่อว่า N Health กว่า 30 สาขาทั่วประเทศ เพื่อให้เป็นจุดเริ่มต้นของการดูแลสุขภาพที่รวดเร็ว และสะดวกสบาย ภายใต้สโลแกน “Living Healthy Daily – สุขภาพดี ทำได้ทุกที่ มีดีได้ทุกวัน” เพราะเราเชื่อว่าการมีสุขภาพดีนั้น ต้องเริ่มที่การตรวจวิเคราะห์ทางห้องปฏิบัติการ เพื่อให้เข้าใจสภาพปัจจุบันของร่างกายเสียก่อน จึงจะวางแผนดูแล รักษา หรือป้องกันได้อย่างเหมาะสม แตกต่างกันไปในแต่ละบุคคล",
  },
  {
    img1: [
      {
        url: "https://storage.googleapis.com/nh-uat-corp/2024/6/webp_update_home_first_section_1_2_72b1fa0a34/webp_update_home_first_section_1_2_72b1fa0a34.webp"
      },
      {
        url: "https://storage.googleapis.com/nh-uat-corp/2024/6/webp_update_home_first_section_3_2_9eb35a242c/webp_update_home_first_section_3_2_9eb35a242c.webp"
      },
      {
        url: "https://storage.googleapis.com/nh-uat-corp/2024/6/webp_update_home_first_section_5_2_cbcd3b1f94/webp_update_home_first_section_5_2_cbcd3b1f94.webp"
      },
      {
        url: "https://storage.googleapis.com/nh-uat-corp/2024/6/webp_update_home_first_section_1_2_72b1fa0a34/webp_update_home_first_section_1_2_72b1fa0a34.webp"
      },
      {
        url: "https://storage.googleapis.com/nh-uat-corp/2024/6/webp_update_home_first_section_3_2_9eb35a242c/webp_update_home_first_section_3_2_9eb35a242c.webp"
      },
      {
        url: "https://storage.googleapis.com/nh-uat-corp/2024/6/webp_update_home_first_section_5_2_cbcd3b1f94/webp_update_home_first_section_5_2_cbcd3b1f94.webp"
      },
      {
        url: "https://storage.googleapis.com/nh-uat-corp/2024/6/webp_update_home_first_section_1_2_72b1fa0a34/webp_update_home_first_section_1_2_72b1fa0a34.webp"
      },
      {
        url: "https://storage.googleapis.com/nh-uat-corp/2024/6/webp_update_home_first_section_3_2_9eb35a242c/webp_update_home_first_section_3_2_9eb35a242c.webp"
      },
      {
        url: "https://storage.googleapis.com/nh-uat-corp/2024/6/webp_update_home_first_section_5_2_cbcd3b1f94/webp_update_home_first_section_5_2_cbcd3b1f94.webp"
      },
    ],
    img2: [
      {
        url: "https://storage.googleapis.com/nh-uat-corp/2024/6/webp_update_home_first_section_2_2_c2588ea54b/webp_update_home_first_section_2_2_c2588ea54b.webp"
      },
      {
        url: "https://storage.googleapis.com/nh-uat-corp/2024/6/webp_update_home_first_section_4_2_99b5ec286b/webp_update_home_first_section_4_2_99b5ec286b.webp"
      },
      {
        url: "https://storage.googleapis.com/nh-uat-corp/2024/6/webp_update_home_first_section_6_2_93dd36630b/webp_update_home_first_section_6_2_93dd36630b.webp"
      },
      {
        url: "https://storage.googleapis.com/nh-uat-corp/2024/6/webp_update_home_first_section_2_2_c2588ea54b/webp_update_home_first_section_2_2_c2588ea54b.webp"
      },
      {
        url: "https://storage.googleapis.com/nh-uat-corp/2024/6/webp_update_home_first_section_4_2_99b5ec286b/webp_update_home_first_section_4_2_99b5ec286b.webp"
      },
      {
        url: "https://storage.googleapis.com/nh-uat-corp/2024/6/webp_update_home_first_section_6_2_93dd36630b/webp_update_home_first_section_6_2_93dd36630b.webp"
      },
      {
        url: "https://storage.googleapis.com/nh-uat-corp/2024/6/webp_update_home_first_section_2_2_c2588ea54b/webp_update_home_first_section_2_2_c2588ea54b.webp"
      },
      {
        url: "https://storage.googleapis.com/nh-uat-corp/2024/6/webp_update_home_first_section_4_2_99b5ec286b/webp_update_home_first_section_4_2_99b5ec286b.webp"
      },
      {
        url: "https://storage.googleapis.com/nh-uat-corp/2024/6/webp_update_home_first_section_6_2_93dd36630b/webp_update_home_first_section_6_2_93dd36630b.webp"
      }
    ]
  }
  ]

let vision = {
  label: [{
    title: "วิสัยทัศน์",
    label: "ด้วยความมุ่งมั่นสู่การเป็นผู้นำในธุรกิจ <br /> ผลิตภัณฑ์ และบริการสุขภาพในอาเซียน"
  }]
  ,
  items: [
    {
      cardIcon: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_icon_1_3654c124f0/thumbnail_update_icon_1_3654c124f0.png",
      imageHover: "https://storage.googleapis.com/nh-uat-corp/2024/6/medium_update_vision_1_6f6a7fbbbd/medium_update_vision_1_6f6a7fbbbd.png",
      cardTitle: "บริการตรวจวิเคราะห์ทางการแพทย์"
    },
    {
      cardIcon: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_icon_2_0379560069/thumbnail_update_icon_2_0379560069.png",
      imageHover: "https://storage.googleapis.com/nh-uat-corp/2024/6/medium_update_vision_2_305d216a5c/medium_update_vision_2_305d216a5c.png",
      cardTitle: "บริการเจาะเลือดที่บ้าน",
    },
    {
      cardIcon: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_icon_3_c22c87afff/thumbnail_update_icon_3_c22c87afff.png",
      imageHover: "https://storage.googleapis.com/nh-uat-corp/2024/6/medium_update_vision_10_ecb1651bc9/medium_update_vision_10_ecb1651bc9.png",
      cardTitle: "บริการงานปราศจากเชื้อ"
    },
    {
      cardIcon: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_icon_4_a0b655a455/thumbnail_update_icon_4_a0b655a455.png",
      imageHover: "https://storage.googleapis.com/nh-uat-corp/2024/6/medium_update_vision_5_1df4f44315/medium_update_vision_5_1df4f44315.png",
      cardTitle: "บริการบริหารจัดการผ้าโรงพยาบาลแบบครบวงจร"
    },
    {
      cardIcon: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_icon_5_08c5e4c6b9/thumbnail_update_icon_5_08c5e4c6b9.png",
      imageHover: "https://storage.googleapis.com/nh-uat-corp/2024/6/medium_update_vision_8_c24fa41a49/medium_update_vision_8_c24fa41a49.png",
      cardTitle: "Biomedical Engineering Services"
    },
    {
      cardIcon: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_icon_6_4fe97d104d/thumbnail_update_icon_6_4fe97d104d.png",
      imageHover: "https://storage.googleapis.com/nh-uat-corp/2024/6/medium_update_vision_9_9cfc3895f7/medium_update_vision_9_9cfc3895f7.png",
      cardTitle: "บริการบริหารซัพพลายเชน และคลังสินค้า"
    },
    {
      cardIcon: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_icon_7_656806a167/thumbnail_update_icon_7_656806a167.png",
      imageHover: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_vision_3_93bfcb61b8/thumbnail_update_vision_3_93bfcb61b8.png",
      cardTitle: "บริการขนส่งทางการแพทย์"
    },
    {
      cardIcon: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_icon_8_9ccececde7/thumbnail_update_icon_8_9ccececde7.png",
      imageHover: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_vision_7_21571f0b16/thumbnail_update_vision_7_21571f0b16.png",
      cardTitle: "ตัวแทนจำหน่ายเวชภัณฑ์ทางการแพทย์"
    },
    {
      cardIcon: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_icon_9_3015c572b3/thumbnail_update_icon_9_3015c572b3.png",
      imageHover: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_vision_6_5a066fb8af/thumbnail_update_vision_6_5a066fb8af.png",
      cardTitle: "ตัวแทนจำหน่ายอุปกรณ์ทางการแพทย์"
    },
    {
      cardIcon: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_icon_10_fc10bdb75e/thumbnail_update_icon_10_fc10bdb75e.png",
      imageHover: "https://storage.googleapis.com/nh-uat-corp/2024/6/medium_update_vision_4_4f653ee46c/medium_update_vision_4_4f653ee46c.png",
      cardTitle: "ศูนย์ตรวจสุขภาพ"
    }
  ]
}


let award = [{
  label: [
    {
      label: "รางวัล และการรับรอง"
    }
  ],
},
{
  items: [
    {
      imgURL: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_2_16a440328b/thumbnail_update_2_16a440328b.png",
    },
    {
      imgURL: "https://storage.googleapis.com/nh-uat-corp/2024/6/medium_update_no_bg_08b39f5dcc/medium_update_no_bg_08b39f5dcc.png",
    },
    {
      imgURL: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_laboratory_modified_837b18a9ff/thumbnail_update_laboratory_modified_837b18a9ff.png",
    },
    {
      imgURL: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_LOGO_Q_gold_163d9d1121/thumbnail_update_LOGO_Q_gold_163d9d1121.png",
    },
    {
      imgURL: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_univercity_73f0f9d4ea/thumbnail_update_univercity_73f0f9d4ea.png",
    }
  ]
}
]

let recommend = [{
  title: [
    {
      title: "บริการแนะนำ",
      label: "N Health (เอ็น เฮลท์) มีโปรแกรมตรวจสุขภาพที่น่าสนใจมากมายที่จะทำให้คุณรู้จักร่างกายของตนเองอย่างละเอียด และวางแผนการกิน การออกกำลังกาย การทานวิตามิน ไปจนถึงการนอนได้อย่างมีประสิทธิภาพ"
    }
  ]
},
{
  image: [
    {
      label: "ลูกค้าบุคคล",
      url: "https://storage.googleapis.com/nh-uat-corp/2024/6/medium_update_asian_family_enjoy_eating_breakfast_together_kitchen_room_home_3dfc20d4e3/medium_update_asian_family_enjoy_eating_breakfast_together_kitchen_room_home_3dfc20d4e3.png"
    },
    {
      label: "ลูกค้าองค์กร",
      url: "https://storage.googleapis.com/nh-uat-corp/2024/6/medium_update_home_1_fd210937c2/medium_update_home_1_fd210937c2.png"
    }
  ]
}]

let health = {
  items: [{
    label: "ค้นหาโปรแกรมตรวจสุขภาพ"
  }],
  card: [
    {
      label: "โปรแกรมสุขภาพทั่วไป",
      url: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_heart_8b1060b1aa/thumbnail_update_heart_8b1060b1aa.png",
      css: "bg-[#FDEAEB]"
    },
    {
      label: "โปรแกรมพันธุกรรม",
      url: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_genetic_checks_72b53d3ed5/thumbnail_update_genetic_checks_72b53d3ed5.png",
      css: "bg-[#EAF2EB]"
    },
    {
      label: "โปรแกรมสุขภาพสำหรับผู้ชาย",
      url: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_men_health_99542b71c9/thumbnail_update_men_health_99542b71c9.png",
      css: "bg-[#E6EBF4]"
    },
    {
      label: "โปรแกรมโภชนาการ",
      url: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_hamburger_b09866dc58/thumbnail_update_hamburger_b09866dc58.png",
      css: "bg-[#FDEEE6]"
    },
    {
      label: "โปรแกรมตรวจสุขภาพสำหรับผู้หญิง",
      url: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_women_health_158bc86b63/thumbnail_update_women_health_158bc86b63.png",
      css: "bg-[#F1F5F9]"
    },
    {
      label: "โปรแกรมตรวจสุขภาพทั้งหมด",
      url: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_all_health_cehck_2cf450ff5a/thumbnail_update_all_health_cehck_2cf450ff5a.png",
      css: "bg-[#FFF9EA]"
    }],
  label: [
    {
      label: "โปรแกรมตรวจสุขภาพทั้งหมด",
    },
  ]
}

let review = {
  title: [
    { title: "รีวิวจากลูกค้า" }
  ],
  items: [
    {
      label: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      name: "Chanathinad Satanon",
      imgURL: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_home_9_9fd2385562/thumbnail_update_home_9_9fd2385562.png",
      package: "Package For Mom",
    },
    {
      label: "Lorem Ipsum in simply dummy text of the printing and typesetting industry.",
      name: "Chanathinad Satanon",
      imgURL: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_home_9_9fd2385562/thumbnail_update_home_9_9fd2385562.png",
      package: "Package For Mom",
    },
    {
      label: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      name: "Chanathinad Satanon",
      imgURL: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_home_9_9fd2385562/thumbnail_update_home_9_9fd2385562.png",
      package: "Package For Mom",
    },
    {
      label: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      name: "Chanathinad Satanon",
      imgURL: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_home_9_9fd2385562/thumbnail_update_home_9_9fd2385562.png",
      package: "Package For Mom",
    },
    {
      label: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      name: "Chanathinad Satanon",
      imgURL: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_home_9_9fd2385562/thumbnail_update_home_9_9fd2385562.png",
      package: "Package For Mom",
    }
  ]
}

let article1 = {
  title: [
    { title: "บทความทางการแพทย์" }
  ],
  card: [
    { label: "Care" },
    { label: "General" }
  ],
  label: [
    {
      title: "สิ่งที่คุณควรรู้ก่อนการส่องกล้องช่องท้องส่วนบน",
      label: "หากคุณมีอาการปวดท้องส่วนบนอย่างต่อเนื่องตลอดจนความผิดปกติอื่น ๆ ในระบบทางเดินอาหาร คุณจะต้องเข้ารับการตรวจส่องกล้องส่วนบนเพื่อพิจารณา ประเมิน และรักษาปัญหาของคุณตั้งแต่ระยะเริ่มแรก เพื่อให้คุณฟื้นคุณภาพชีวิตได้ทันที"
    }]
  ,
  items: [
    {
      carouselURL: "https://storage.googleapis.com/nh-uat-corp/2024/6/update_branch_4_d4280ca512/update_branch_4_d4280ca512.png",
      avatarURL: "https://storage.googleapis.com/nh-uat-corp/2024/6/update_christopher_campbell_44eda4ee90/update_christopher_campbell_44eda4ee90.jpg",
      yearInAvatar: "22 Jun 2024",
      avatarName: "Dr. Prapat Samitisatian",
    },
    {
      carouselURL: "https://storage.googleapis.com/nh-uat-corp/2024/6/update_branch_chumpon_1a86549cf3/update_branch_chumpon_1a86549cf3.jpg",
      avatarURL: "https://storage.googleapis.com/nh-uat-corp/2024/6/update_aiony_haust_90d0fadf62/update_aiony_haust_90d0fadf62.jpg",
      yearInAvatar: "20 Jun 2024",
      avatarName: "Dr. Jenifer Walker",
    },
    {
      carouselURL: "https://storage.googleapis.com/nh-uat-corp/2024/6/update_team_medical_personal_f8503fb116/update_team_medical_personal_f8503fb116.png",
      avatarURL: "https://storage.googleapis.com/nh-uat-corp/2024/6/update_christopher_campbell_44eda4ee90/update_christopher_campbell_44eda4ee90.jpg",
      yearInAvatar: "20 Jun 2024",
      avatarName: "Dr. Prapat Samitisatian",
    }
  ]
}

let article2 = {
  title: [
    { title: "บทความทางการแพทย์" }
  ],
  card: [
    { label: "Care" },
    { label: "General" }
  ],
  label: [
    {
      title: "สิ่งที่คุณควรรู้ก่อนการส่องกล้องช่องท้องส่วนบน",
      label: "หากคุณมีอาการปวดท้องส่วนบนอย่างต่อเนื่องตลอดจนความผิดปกติอื่น ๆ ในระบบทางเดินอาหาร คุณจะต้องเข้ารับการตรวจส่องกล้องส่วนบนเพื่อพิจารณา ประเมิน และรักษาปัญหาของคุณตั้งแต่ระยะเริ่มแรก เพื่อให้คุณฟื้นคุณภาพชีวิตได้ทันที"
    }
  ],
  items: [
    {
      "carouselURL": "https://storage.googleapis.com/nh-uat-corp/2024/6/update_team_medical_personal_f8503fb116/update_team_medical_personal_f8503fb116.png",
      "avatarURL": "https://storage.googleapis.com/nh-uat-corp/2024/6/update_christopher_campbell_44eda4ee90/update_christopher_campbell_44eda4ee90.jpg",
      "yearInAvatar": "20 Jun 2024",
      "avatarName": "Dr. Prapat Samitisatian",
    },
    {
      "carouselURL": "https://storage.googleapis.com/nh-uat-corp/2024/6/update_branch_4_d4280ca512/update_branch_4_d4280ca512.png",
      "avatarURL": "https://storage.googleapis.com/nh-uat-corp/2024/6/update_christopher_campbell_44eda4ee90/update_christopher_campbell_44eda4ee90.jpg",
      "yearInAvatar": "22 Jun 2024",
      "avatarName": "Dr. Prapat Samitisatian",
    },
    {
      "carouselURL": "https://storage.googleapis.com/nh-uat-corp/2024/6/update_branch_chumpon_1a86549cf3/update_branch_chumpon_1a86549cf3.jpg",
      "avatarURL": "https://storage.googleapis.com/nh-uat-corp/2024/6/update_aiony_haust_90d0fadf62/update_aiony_haust_90d0fadf62.jpg",
      "yearInAvatar": "20 Jun 2024",
      "avatarName": "Dr. Jenifer Walker",
    }
  ]
}

let items = [{
  url: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_N_Health_White_7944d37805/thumbnail_update_N_Health_White_7944d37805.png",
  children: [
    {
      label: 'บริษัท เนชั่นแนล เฮลท์แคร์ ซิสเท็มส์ จำกัด <br/> 2301/2 ถนนเพชรบุรีตัดใหม่ แขวงบางกะปิ เขตห้วยขวาง กรุงเทพมหานคร <br/> 10310',
    }
  ]
},
{
  label: "แพ็กเกจ และโปรโมชั่น",
  children: [
    {
      label: "โปรแกรมตรวจสุขภาพทั่วไป",
      url: "#"
    },
    {
      label: "โปรแกรมตรวจสุขภาพสำหรับผู้หญิง",
      url: "#"
    },
    {
      label: "โปรแกรมตรวจสุขภาพสำหรับผู้ชาย",
      url: "#"
    },
    {
      label: "โปรแกรมตรวจพันธุกรรม",
      url: "#"
    },
    {
      label: "โปรแกรมตรวจโภชนาการ",
      url: "#"
    },
  ]
},
{
  label: "บริการของเรา",
  children: [
    {
      label: "ภาพรวมบริษัท",
      url: "#"
    },
    {
      label: "การบริการ",
      url: "#"
    }
  ]
},
{
  label: "บริษัท",
  children: [
    {
      label: "เกี่ยวกับเรา",
      url: "#"
    },
    {
      label: "บทความ",
      url: "#"
    },
    {
      label: "ข่าวสาร และกิจกรรม",
      url: "#"
    },
    {
      label: "ติดต่อเรา",
      url: "#"
    },
  ]
},
{
  label: "นโยบายความเป็นส่วนตัว",
  children: [
    {
      label: "เงื่อนไขการขอข้อมูล",
      url: "#"
    },
    {
      label: "นโยบายความเป็นส่วนตัว",
      url: "#"
    },
    {
      label: "นโยบายคุกกี้",
      url: "#"
    }
  ]
}
];

app.get('/nav', (req, res) => {
  res.json({ nav });
})

app.get('/paragram', (req, res) => {
  res.json({ paragram });
})

app.get('/vision', async (req, res) => {

  let itemsFromDatabase = []
  if (con.state === 'authenticated') {
    try {
      const result = await new Promise((resolve, reject) => {
        con.query("SELECT * FROM vision_card", (err, result, fields) => {
          if (err) {
            reject(err)
          } else {
            resolve(result)
          }
        })
      })
      itemsFromDatabase = (result)
    } catch (error) {
      console.log("SQL QUERY ERROR :::::::: ", error)
    }
  }

  res.json({
    vision: {
      ...vision,
      items: itemsFromDatabase
    }
  });

  // res.json({ vision });
})

app.get('/award', (req, res) => {
  res.json({ award });
})

app.get('/recommend', (req, res) => {
  res.json({ recommend });
})

app.get('/health', async (req, res) => {
  let cardFromDatabase = []
  if (con.state === 'authenticated') {
    try {
      const result = await new Promise((resolve, reject) => {
        con.query("SELECT * FROM health_card", (err, result, fields) => {
          if (err) {
            reject(err)
          } else {
            resolve(result)
          }
        })
      })
      cardFromDatabase = (result)
    } catch (error) {
      console.error("SQL QUERY ERROR :::: ", error)
    }

  }
  res.json({
    health: {
      ...health,
      card: cardFromDatabase
    }
  });
})



app.get('/review', (req, res) => {
  res.json({ review });
})

app.get('/article1', (req, res) => {
  res.json({ article1 });
})

app.get('/article2', (req, res) => {
  res.json({ article2 })
})

app.get('/footer', (req, res) => {
  res.json({ items });
})



const insertHealthCard = async (label, url, css) => {
  const result = await new Promise((resolve, reject) => {
    con.query('INSERT INTO `health_card` (`id`, `label`, `url`, `css`) VALUES (NULL, ?, ?, ?)',
      [label, url, css], (err, results) => {
        if (err) {
          console.log("ไม่ผ่าน")
          reject(err)
        } else {
          resolve(results)
        }
      })
    console.log("1")
  })
  console.log("2")
}

app.post('/health/add', async (req, res) => {

  console.log(req.body)

  // res.json("fin")

  const label = req.body.label;
  const url = req.body.url;
  const css = req.body.css;

  if (con.state === 'authenticated') {
    try {
      console.log("3")
      const results = await insertHealthCard(label, url, css)
      res.json(results)
    } catch (error) {
      console.log(error);
    }
    console.log("4")
  }
  console.log('5')
})


const insertVisionCard = async (cI, imgH, cT) => {
  const result = await new Promise((resolve, reject) => {
    con.query('INSERT INTO `vision_card` (`id`,`card_icon`,`image_hover`,`card_title`) VALUES (NULL,?,?,?)',
      [cI, imgH, cT], (err, results) => {
        if (err) {
          console.log("ไม่ผ่าน")
          reject(err)
        } else {
          resolve(results)
        }
      }
    )
  })
}

app.post('/vision/add', async (req, res) => {
  console.log(req.body)

  const cI = req.body.cI;
  const imgH = req.body.imgH;
  const cT = req.body.cT;

  if (con.state === 'authenticated') {
    try {
      const results = await insertVisionCard(cI, imgH, cT)
      res.json(results)
    } catch (error) {
      console.log(error);
    }
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



