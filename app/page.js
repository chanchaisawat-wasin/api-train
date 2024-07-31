const express = require('express')
const app = express()
const port = 5000

let nav = {
  img: {
    logo: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_N_Health_d5a05fd0a9/thumbnail_update_N_Health_d5a05fd0a9.png"
  },
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
      label: "'ข่าวสาร และกิจกรรม",
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
  ]
};

let footer = {
  items: [{
    url: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_N_Health_White_7944d37805/thumbnail_update_N_Health_White_7944d37805.png",
    label: "บริษัท เนชั่นแนล เฮลท์แคร์ ซิสเท็มส์ จำกัด <br/> 2301/2 ถนนเพชรบุรีตัดใหม่ แขวงบางกะปิ เขตห้วยขวาง กรุงเทพมหานคร <br/> 10310"
  },
  {
    label: "แพ็กเกจ และโปรโมชั่น",
    children: [
      {
        label:"โปรแกรมตรวจสุขภาพทั่วไป",
        url: "#"
      },
      {
        label: "โปรแกรมตรวจสุขภาพสำหรับผู้หญิง",
        url:"#"
      },
      {
        label: "โปรแกรมตรวจสุขภาพสำหรับผู้ชาย",
        url:"#"
      },
      {
        label: "โปรแกรมตรวจพันธุกรรม",
        url:"#"
      },
      {
        label: "โปรแกรมตรวจโภชนาการ",
        url:"#"
      },
    ]
  },
  {
    label:"บริการของเรา",
    children: [
      {
        label: "ภาพรวมบริษัท",
        url:"#"
      },
      {
        label:"การบริการ",
        url:"#"
      }
    ]
  },
  {
    label:"บริษัท",
    children: [
      {
        label: "เกี่ยวกับเรา",
        url:"#"
      },
      {
        label:"บทความ",
        url:"#"
      },
      {
        label:"ข่าวสาร และกิจกรรม",
        url: "#"
      },
      {
        label:"ติดต่อเรา",
        url:"#"
      },
    ]
  },
  {
    label: "นโยบายความเป็นส่วนตัว",
    children: [
      {
        label:"เงื่อนไขการขอข้อมูล",
        url:"#"
      },
      {
        label:"นโยบายความเป็นส่วนตัว",
        url:"#"
      },
      {
        label:"นโยบายคุกกี้",
        url:"#"
      }
    ]
  }
  ]
};

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))

app.get('/nav', (req, res) => {
  res.json({nav})
})

app.get('/footer', (req, res) => {
  res.json({footer})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})