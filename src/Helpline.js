import React, { Component } from "react";
import { Table, Input, Button, Space } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";

const data = [
  {
    key: "1",
    name: "Apollo Pharmacy (A Unit of Apollo Hospitals Enterprises ltd) ",
    address:
      "No.06, Ground floor, Railway  bridge road,Kumara park  East,560001",
    phone: 9900054615,
  },
  {
    key: "2",
    name: "SUGUNA NARAYANA HEART CENTRE( UNIT OF NH PRIVATE LIMITED) ",
    address:
      "No.1A/87, Dr.Rajkumar Road,SUGUNA HOSPITAL -2  FLOOR,4th N Block, Rajajinagar,560010",
    phone: 9538066577,
  },
  {
    key: "3",
    name: "GREEN APPLE ( A UNIT OF RADIANT HEALTH CARE PVT.  LTD.) ",
    address: "# 2 VITTAL MALYA ROAD, ( In patient )BANGALORE 560001",
    phone: 9342497305,
  },
  {
    key: "4",
    name: "CYTESPACE RESEARCH PVT.LTD ",
    address: "K.NO.9/3, NITESH BROADWAY, GF, MG ROAD,MG ROAD560001",
    phone: 9986243891,
  },
  {
    key: "5",
    name: "SAI HOSPI ESSENTIALS ",
    address: "#117,DODDABETTAHALLI,GF VIDYARANYAPURA POST 560097",
    phone: 720436696,
  },
  {
    key: "6",
    name: "ALARIC ENTERPRISES  ",
    address: "# 11/1, 4TH FLOOR, 8TH CROSS,MALLESHWARAM 560 003",
    phone: 8095033311,
  },
  {
    key: "7",
    name: "MANJUSHREE MEDICALS ",
    address:
      "SHOP NO.01, NO.13, 7TH MAIN, BHUVANESHWARI NAGAR,HESARAGHATTA MAIN ROAD,560057",
    phone: 9611297373,
  },
  {
    key: "8",
    name: "COLUMBIA ASIA REFERRAL HOSPITAL (PHARMACY) ",
    address:
      "# 26/1, SUBRAMANYANAGAR INDUSTRIAL SUBURB,MALLESWARAM WEST 560055",
    phone: 9448051876,
  },
  {
    key: "9",
    name: "People Tree Pharma (Unit of TMI Healthcare Pvt.Ltd)",
    address:
      "No.2, Service Road, Opp.Taj Vivanta, Tumkur Road,NH-4,  Gorguntepalya,yeshwanthpur,560022",
    phone: 9886058284,
  },
  {
    key: "10",
    name: "AVEKSHA MEDICALS(AVEKSHA HOSPITAL PREMISES) ",
    address:
      "NO.647/4,5,6/102/103/121/122A  , GF, VARADARAJASWAMY LAYOUT,SINGAPURA VILLAGE, M.S.PALYA,   VIDYARANAYAPURA  POST,560097",
    phone: 9886553086,
  },
  {
    key: "11",
    name: "MANIPAL NORTHSIDE HOS,O.P. PHARMA(A UNIT OF MANIPAL  HEALTH  ",
    address: "NO.5/2, 8TH MAIN ROAD,13TH CROSS,GF,MALLESHWARAM560003",
    phone: 9740311505,
  },
  {
    key: "12",
    name: "FAMILY PHARMA ( A  UNIT OF FAMILY HEALTH PROVIDERS   PVT, LTD.) ",
    address:
      "NO.423/2, NEW NO.11/1, 60ft,  Rd,1st MAIN 1st STAGE, GOKULAMATHIKERE MAIN ROAD, MATHIKERE560054",
    phone: 9448189988,
  },
  {
    key: "13",
    name: "PALS HEALTHCARE  ",
    address:
      "#15, Shop No.02, 1st Floor,  Aditya Nagar,1st stage,   Chickkabettahalli,    Vidyaranyapura(P)560097",
    phone: 8904087542,
  },
  {
    key: "14",
    name: "FRANK ROSS PHARMA(A DIVISION OF EMAMI FRANK ROSS LTD) ",
    address:
      "NO.53,GF,RATAN MAHAL LODGE COMPLEX,4 th CROSS SAMPIGE ROAD,MALLESHWARAM560003",
    phone: 9535056899,
  },
  {
    key: "15",
    name: "Religare Wellness (Religare Welness ltd) ",
    address: "Old No;37, New No;36, Castle street,Ashok Nagar,560025",
    phone: 9663368681,
  },
  {
    key: "16",
    name: "JENUSHREE MEDICALS & GENERAL STORES ",
    address:
      "NO-115/1, GROUND FLOOR, 6TH CROSS, BAPUJI LAYOUT,Opp. CHANDRA LAYOUT CANARA BANK,560040",
    phone: 9448949830,
  },
  {
    key: "17",
    name: "CHAYA PHARMA  ",
    address:
      "NO.6, (GROUND FLOOR), 5TH MAIN,O.M.B.R. LAYOUT,  B.CHANNASANDRA ,560043",
    phone: 9880847339,
  },
  {
    key: "18",
    name: "PLASMAGEN BIOSCIENCES PVT.  LTD. ",
    address:
      "#1342, ground floor, Dr.Shivaramkaranth Nagar,M.C.E.H.S Lay out, Yelahanka Hobli560064",
    phone: 9731557200,
  },
  {
    key: "19",
    name: "SHREE RANGANATHA MEDICALS ",
    address: "#493,GF,17TH CROSS,JAKKUR LAYOUT 560064",
    phone: 9611261394,
  },
  {
    key: "20",
    name: "CHAITANYA PHARMA ",
    address: "NO.971/24, K.H.B.COLONY, A SECTOR,YELAHANKA NEW TOWN,560064",
    phone: 9845625363,
  },
  {
    key: "21",
    name: "APPLE PHARMA ",
    address:
      "APPLE HOSPITAL, PLOT NO. 17/B-18, 19, 20 C SECTOR,YELAHANKA NEW  TOWN, YELAHANKA,  DODDABALLAPURA MAIN   ROAD,560064",
    phone: 9945690149,
  },
  {
    key: "22",
    name: "M/S PRUNUS LIFESCIENCES INDIA  PVT LTD ",
    address: "NO. 7, SRI MATHA, RAJA RAJESHWARI   BLOCK,HEBBAL,560024",
    phone: 9482510759,
  },
  {
    key: "24",
    name: "Sure Fertilityy (India) Pvt Ltd ",
    address: "No 115,Kodihalli,Old Airport road 560017",
    phone: 9900533338,
  },
  {
    key: "25",
    name: "St. Johns Medical Collage Hospital Pharma ",
    address: "St. Johns Medical Collage Hospital Campus Sarjapura Road 560034",
    phone: 9999999999,
  },
  {
    key: "26",
    name: "St.JohnS Medical College Hospital Pharma (2nd Floor) ",
    address:
      "No-67-3-141/2, 2nd Floor St.JohnS Medical College  Hospital Premises Sarjapur Road 560034",
    phone: 8022065000,
  },
  {
    key: "27",
    name: "Munipal Hosptal ICU Pharma ",
    address:
      "No.133, (old No. 98), 3rd Floor,Manipal HospitalRustom Bagh, Old Airport Road,560017",
    phone: 9844582343,
  },
  {
    key: "28",
    name: "S&S Pharma ",
    address:
      "Sy. No-29 M/s.Shiva & Shiva Orthopadic Hospital  PrimesesKitegenahalli Village560099",
    phone: 9242820155,
  },
  {
    key: "29",
    name: "Hrudayalaya Pharma & General Stores ",
    address:
      "No-258/A, Narayana HrudayalaBommasandra Ind  Area, Anekal Taluk,560099",
    phone: 9900193614,
  },
  {
    key: "30",
    name: "Trust Chemists & Druggist Ltd. ",
    address: "No-86, Hosur Road Madiwala 560068",
    phone: 9902973291,
  },
  {
    key: "31",
    name: "Vijayashree Medicals  ",
    address: "No-03, G Floor, Bannerghatta Main Road Gottigere 560083",
    phone: 9945671947,
  },
  {
    key: "32",
    name: "Spring Leaf Healthcare Pvt Ltd. ",
    address:
      "No-60/3, G Floor, Electronic City Next to Andra BankHosur Main Road 560100",
    phone: 8867346685,
  },
  {
    key: "33",
    name: "THE OXFORD DRUG STORES (CHILDERN EDUCATION SOCIETY) ",
    address:
      "The Oxford Medical Hospital and Research Centre,S.No 20,. Yedavanahalli, Attibele Hobli, Anekal (TQ),562107",
    phone: 9845037176,
  },
  {
    key: "34",
    name: "SHAKTI MEDICAL AND GENERAL STORES ",
    address: "NO. 9-10-172, SHOP NO.2, GROUND FLOOR,KUMBARWADA ROAD,",
    phone: 9448125855,
  },
  {
    key: "35",
    name: "SRI OM SAI MEDICAL  AND GENERAL STORE ",
    address:
      "SHOP NO:1 BUILDING  NO:1005/1OPP BASAVA HIGH AND PRIMARY   SCHOOL,MANAHALLI",
    phone: 9448572203,
  },
  {
    key: "36",
    name: "RATNADEEP  MEDICALS (   PHARMACEUTICAL DISTRIBUTORS ) ",
    address:
      "CMC NO:12-1-34 & 12-1-37,   ROOM NO. 1,2 & 3, GROUND   FLOORNAZARATH COLONY ,BEHIND KARNATAKA COLLEGE 585401",
    phone: 8861055999,
  },
  {
    key: "37",
    name: "BASAVA MEDICAL AND GENERAL  STORES ",
    address: "19-91/18,MAIN RAOD ",
    phone: 9945511891,
  },
  {
    key: "38",
    name: "NEW BHARATHI MEDICAL & GENERAL   STORES ",
    address:
      "DOOR NO: 117/2/1, WARD NO:17, GROUND FLOORSHOP  NO: 1, MAYURA HOTEL     COMPLEX, DOUBLE   ROAD 583101",
    phone: 9448234437,
  },
  {
    key: "39",
    name: "SWETHA MEDICAL &  GENERAL STORES ",
    address: "DOOR NO: 81,Opp to GOVT PRIMARY SCHOLL,583115",
    phone: 9448941511,
  },
  {
    key: "40",
    name: "BELLARY MEDICALS AND GENERALS ( 24   HOURS ) ",
    address: "STALL NO: 5, WARD NO:17,EDIGA HOSTEL COMPLEX, COURT  ROAD,583101",
    phone: 968600838,
  },
  {
    key: "41",
    name: "K.L.E. Pharma Gokak  ",
    address: "CTS.No.3777/A-1,Main Road,591307",
    phone: 9448420863,
  },
  {
    key: "42",
    name: "M.V.J.Medical College & Research Centers Pharmacy",
    address: "K.No: 149, 152/1 &  150,Dandupalya 562114",
    phone: 8453304403,
  },
];

const data2 = [
  {
    key: "1",
    name: "Bangalore Baptist Hospital",
    phone: "23330322 / 23330323",
  },
  {
    key: "2",
    name: "Bangalore Children's Hospital & Research",
    phone: "28600252 / 28600552",
  },
  {
    key: "3",
    name: "Bangalore Hospital",
    phone: "26562753 / 26565494",
  },
  {
    key: "4",
    name: "Bangalore Institute of Oncology",
    phone: "2225698 / 22225644",
  },
  {
    key: "5",
    name: "Bhagwan Mahaveer Jain Hospital",
    phone: "22207640 / 22207649",
  },
  {
    key: "6",
    name: "Rotary Blood Bank",
    phone: "25287903",
  },
  {
    key: "7",
    name: "BKF - Round Table Voluntary Blood Bank",
    phone: "26392697",
  },
  {
    key: "8",
    name: "Dr. Shivaji Rao's Blood Bank",
    phone: "22224044",
  },
  {
    key: "9",
    name: "Grace Blood Bank",
    phone: "23336608",
  },
  {
    key: "10",
    name: "HOSMAT",
    phone: "25543746",
  },
  {
    key: "11",
    name: "Karnataka Red Cross Blood Bank",
    phone: "22268435",
  },
  {
    key: "12",
    name: "KIMS Hospital",
    phone: "26673056 / 26624870",
  },
  {
    key: "13",
    name: "Lions Blood Bank",
    phone: "22266807",
  },
  {
    key: "14",
    name: "Jeeva Voluntary Blood Bank",
    phone: "26500736",
  },
  {
    key: "15",
    name: "Bangalore Blood Bank ",
    phone: "23347714",
  },
  {
    key: "16",
    name: "Banglalore Medical Services",
    phone: "25293486",
  },
  {
    key: "17",
    name: "Voluntary Bloodbank",
    phone: "26392697",
  },
];

const data3 = [
  {
    key: "1",
    name: "Yashoda SV",
    phone: "94491-96029",
  },
  {
    key: "2",
    name: "Chandra Prabha K",
    phone: "96119-76682",
  },
  {
    key: "3",
    name: "Tejaswini C",
    phone: "8217507288",
  },
  {
    key: "4",
    name: "Lata KB",
    phone: "99644-87492",
  },
  {
    key: "5",
    name: "Hemavati G",
    phone: "99160-59429",
  },
  {
    key: "6",
    name: "Vani S",
    phone: "98451-30048",
  },
  {
    key: "7",
    name: "Chudamani",
    phone: "94807-74708",
  },
  {
    key: "8",
    name: "Padma JT",
    phone: "99869-99362",
  },
  {
    key: "9",
    name: "R Sunitha Kumari",
    phone: "95350-36811",
  },
  {
    key: "10",
    name: "Nirmala Devi S",
    phone: "9448-386453",
  },
  {
    key: "11",
    name: "Shwetha S",
    phone: "90368-26616",
  },
  {
    key: "12",
    name: "Suvarna JJ",
    phone: "94494-89871",
  },
  {
    key: "13",
    name: "Vijaya K",
    phone: "99458-28585",
  },
  {
    key: "14",
    name: "Divya Jyothi",
    phone: "95359-10979",
  },
  {
    key: "15",
    name: "Dr Vinod S Kamble",
    phone: "88842-52200",
  },
  {
    key: "16",
    name: "Renuka Swamy HM",
    phone: "94490-48659",
  },
  {
    key: "17",
    name: "Krishnoji Rao T",
    phone: "99861-97671",
  },
  {
    key: "18",
    name: "Naresh A",
    phone: "90609-96880",
  },
  {
    key: "19",
    name: "Arun Kumar R",
    phone: "94493-75968",
  },
  {
    key: "20",
    name: "Muniraju V",
    phone: "9900-262599",
  },
  {
    key: "21",
    name: "Venkateshappa",
    phone: "99458-31452",
  },
  {
    key: "22",
    name: "Abhishek Shrimantha Majjag",
    phone: "98864-64251",
  },
  {
    key: "23",
    name: "Jayanth Patil KR",
    phone: "78923-38306",
  },
  {
    key: "24",
    name: "Harshavardhan",
    phone: "95385-38118",
  },
  {
    key: "25",
    name: "H Manjunath",
    phone: "99452-11810",
  },
  {
    key: "26",
    name: "C Lingaraju",
    phone: "98800-37351",
  },
  {
    key: "27",
    name: "Prasanna Kumar SR",
    phone: "94800-92899",
  },
  {
    key: "28",
    name: "Yashavantha Kumar",
    phone: "94482-17697",
  },
  {
    key: "29",
    name: "Manjunatha",
    phone: "994809-17985",
  },
  {
    key: "30",
    name: "K Shivalingaiah",
    phone: "98446-42938",
  },
  {
    key: "31",
    name: "Lakshmi Narasimha Murthy",
    phone: "94485-11903",
  },
  {
    key: "32",
    name: "Kiran S",
    phone: "99160-86183",
  },
  {
    key: "33",
    name: "J Vijaya",
    phone: "91640-25718",
  },
  {
    key: "34",
    name: "Ashok KR",
    phone: "93459-43872",
  },
];

const data4 = [
  {
    key: "1",
    name: "East",
    phone: "+91-74110-38024",
  },
  {
    key: "2",
    name: "South",
    phone: "+91-90199-15817",
  },
  {
    key: "3",
    name: "Bommanahalli",
    phone: "	+91-88846-66670",
  },
  {
    key: "4",
    name: "Yelahanka",
    phone: "+91-94806-85964",
  },
  {
    key: "5",
    name: "West",
    phone: "+91-80-6824-8454",
  },
  {
    key: "6",
    name: "R R Nagar",
    phone: "+91-80-2860-1050",
  },
  {
    key: "7",
    name: "Mahadevpura",
    phone: "+91-80-2301--0101",
  },
  {
    key: "8",
    name: "Dasarahalli",
    phone: "+91-72048-69787",
  },
  {
    key: "9",
    name: "Anekal Taluk",
    phone: "	+91-88841-11160",
  },
  {
    key: "10",
    name: "North Taluk",
    phone: "+91-89043-22946",
  },
  {
    key: "11",
    name: "South Taluk",
    phone: "+91-82775-15788",
  },
];
class Helplines extends Component {
  state = {
    searchText: "",
    searchedColumn: "",
  };

  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => this.handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: (text) =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: "" });
  };

  render() {
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        width: "30%",
        ...this.getColumnSearchProps("name"),
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "address",
        ...this.getColumnSearchProps("address"),
      },
      {
        title: "Phone Number",
        dataIndex: "phone",
        key: "address",
      },
    ];

    const columns2 = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        width: "30%",
        ...this.getColumnSearchProps("name"),
      },
      {
        title: "Phone Number",
        dataIndex: "phone",
        key: "address",
      },
    ];

    const columns3 = [
      {
        title: "Name of officers",
        dataIndex: "name",
        key: "name",
        width: "30%",
        ...this.getColumnSearchProps("name"),
      },
      {
        title: "Phone Number",
        dataIndex: "phone",
        key: "address",
      },
    ];

    const columns4 = [
      {
        title: "Bangalore Urban Zones",
        dataIndex: "name",
        key: "name",
        width: "30%",
        ...this.getColumnSearchProps("name"),
      },
      {
        title: "Phone Number",
        dataIndex: "phone",
        key: "address",
      },
    ];

    return (
      <div>
        <h3>24/7 Helpline For Oxygen And Remdesivir In Karnataka</h3>
        <h6>
          source :
          https://www.karnataka.com/govt/helpline-for-oxygen-and-remdesivir-in-karnataka/
        </h6>
        <Table columns={columns3} dataSource={data3} />
        <h3>BBMP Control Room Numbers – Zone-Wise Helpline Numbers</h3>
        <Table columns={columns4} dataSource={data4} />
        <h3>24/7 hours Pharmacies</h3>
        <Table columns={columns} dataSource={data} />
        <h3>Blood Banks</h3>
        <Table columns={columns2} dataSource={data2} />
      </div>
    );
  }
}

export default Helplines;
