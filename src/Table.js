import React, { Component } from "react";
import { Table, Input, Button, Space } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";

const data = [
  {
    key: "1",
    name: "Trinity Hospital And Heart Foundation ",
    city: "Bengaluru",
    address:
      "Trinity Hospital And Heart Foundation No 27 Sri Rama Mandir Road Bangalore South 560004",
    phone: 41503434,
  },
  {
    key: "2",
    name: "M S Ramaiah Narayana Heart Centre",
    city: "Bengaluru",
    address: "MSR IT Post MSR Nagar New Bel Road ",
    phone: 9980021380,
  },
  {
    key: "3",
    name: "Medihope Hospitals And Research Centre Pvt Ltd ",
    city: "Bengaluru",
    address:
      "Medihope Hospitals And Research Centre Pvt Ltd No 114 1 Malleshpalya Main Road New Thippasandra Post Bangalore 560075",
    phone: 8033431000,
  },
  {
    key: "4",
    name: "Rajarajeswari Medical college And Hospital ",
    city: "Bengaluru",
    address:
      "Rajarajeswari Medical college And Hospital Kambipura Mysore Road Bangalore 560074",
    phone: 8028437888,
  },
  {
    key: "5",
    name: "Nu Hospitals Pvt Ltd",
    city: "Bengaluru",
    address:
      "Nu Hospitals Pvt Ltd C A 6 15Th Main 11Th Cross Padmanabhanagar Bangalore 560070 ",
    phone: 8042489966,
  },
  {
    key: "6",
    name: "Bangalore Cancer Centre Private Limited ",
    city: "Bengaluru",
    address:
      "118 1 2 Mookambika Temple Road Machohalli Forest Gate Magadi Main Road Bangalore 560091",
    phone: 8028536767,
  },
  {
    key: "7",
    name: "Leena Multispeciality Hospital",
    city: "Bengaluru",
    address: "S Narasimhaiah Lay Out Budigere Road Devanahalli Town ",
    phone: 9535000622,
  },
  {
    key: "8",
    name: "Manasa Hospital",
    city: "Bengaluru",
    address: "Manasa Hospital D Cross Main Road Doddaballapur 561203 ",
    phone: 8027622162,
  },
  {
    key: "9",
    name: "Spine Care And Ortho Care Hospital ",
    city: "Bengaluru",
    address:
      "Spine Care And Ortho Care Hospital No 14 16Th Block Police Quarters Junction Tollgate Magadi Road Rajajinagar Bangalore 560023 ",
    phone: 8023389357,
  },
  {
    key: "10",
    name: "Tathagat Heart Care Centre Llp",
    city: "Bengaluru",
    address:
      "No 31 32 Mallige Medical Centre Premises Crescent Road Bangalore  ",
    phone: 8022357777,
  },
  {
    key: "11",
    name: "Raksha Multispeciality Hospital",
    city: "Bengaluru",
    address:
      "No141 142 1st Main Khb Colony Krishnanda Nagarpolice Quarters Nandini Layout ",
    phone: 8152976976,
  },
  {
    key: "12",
    name: "Ramaiah Harsha Hospital",
    city: "Bengaluru",
    address: "93 4 Sondekoppa Circle Nelamagnala ",
    phone: 9886809595,
  },
  {
    key: "13",
    name: "New Varalakshmi Hospital ",
    city: "Bengaluru",
    address: "No 2 Mahakavi Kuvempu Road 2nd Stage Rajajinagar Bangalore ",
    phone: 9845390002,
  },
  {
    key: "14",
    name: "Santosh Hospital",
    city: "Bengaluru",
    address: "Promenade Road Bengaluru North ",
    phone: 9845306703,
  },
  {
    key: "15",
    name: "Prashanth Hospital ",
    city: "Bengaluru",
    address: "No 90 d Hosur road Bommanahalli circle  ",
    phone: 9182759767,
  },
  {
    key: "16",
    name: "Nagappa Hadli Hospital",
    city: "Bengaluru",
    address: "Sambhram College Road MS Palya Vidyaranyapura Bangalore  ",
    phone: 9964741909,
  },
  {
    key: "17",
    name: "Bms Hospital ",
    city: "Bengaluru",
    address: "Bull Temple Road Basavanagudi Bangalore 560004 ",
    phone: 9900013238,
  },
  {
    key: "18",
    name: "Akash Medical College",
    city: "Bengaluru",
    address:
      "Akash Hospital Near Kempegowda International Airport Devanahalli Bangalore Rural 562110",
    phone: 8071159900,
  },
  {
    key: "19",
    name: "Aster Cmi",
    city: "Bengaluru",
    address: "Aster Cmi Hospital 43 2 Nh 7 Sahakarnagar Bengaluru 560092  ",
    phone: 8043420100,
  },
  {
    key: "20",
    name: "Bhagvan Mahaveer Jain Hospital",
    city: "Bengaluru",
    address:
      "Bhagwan Mahaveer Jain Hospital Millers Road Vasanthnaga Bangalore 560052  ",
    phone: 8040875555,
  },
  {
    key: "21",
    name: " East Point Medical College",
    city: "Bengaluru",
    address:
      "East Point Hospital 113 Bidarahalli Virgonagara Bangalore East 560049 ",
    phone: 8028472999,
  },
  {
    key: "22",
    name: "Kims ",
    city: "Bengaluru",
    address: "K R Road V V Puram Bangalore 560004",
    phone: 9535179666,
  },
  {
    key: "23",
    name: "M.S. Ramaiah Medical College ",
    city: "Bengaluru",
    address:
      "M S Ramaiah Hospital Msr Nagar Msrit Post  Bangalore North 560054  ",
    phone: 8023608888,
  },
  {
    key: "24",
    name: "Mvj Medical College ",
    city: "Bengaluru",
    address:
      "Mvj Medical College And Research Hospital 30Th Km Milestone National Highway 04 Hoskote Dandupalya 562114",
    phone: 8028060251,
  },
  {
    key: "25",
    name: "Narayana Hrudayalaya Private Limited. ",
    city: "Bengaluru",
    address:
      "Narayana Hrudayalaya Private Limited 258 A   Bommasandra Industrial Area Anekal Taluk  Bangalore 560099",
    phone: 8022152215,
  },
  {
    key: "26",
    name: "Oxford Medical College ",
    city: "Bengaluru",
    address:
      "Yadavanahalli NH 7 Hosur main road Attibele Anekal TalukBengaluru Rural ",
    phone: 9880929398,
  },
  {
    key: "27",
    name: "P M Santosh Hospital ",
    city: "Bengaluru",
    address:
      "1344 1 63 3 Himigepura Ward No 193 Behind Bgs Global Hospital Next To Galaxy Apts ",
    phone: 9448375528,
  },
  {
    key: "28",
    name: "Sanjeevini Hospital ",
    city: "Bengaluru",
    address: "No 760 7th Main Last Bus Stop Mahalaxmi Layout",
    phone: 7022023351,
  },
  {
    key: "29",
    name: "Sapthagiri ",
    city: "Bengaluru",
    address:
      "Sapthagiri Super Speciality Hospital No 15 Chikkasandra Hesargatta Road Bangalore 560090 ",
    phone: 8022188999,
  },
  {
    key: "30",
    name: "St. Johns Institute Of Medical Sciences",
    city: "Bengaluru",
    address: "Sarjapur Road John Nagar Koramangala",
    phone: 8022065324,
  },
  {
    key: "31",
    name: "St. MarthaS Hospital ",
    city: "Bengaluru",
    address: "St Marthas Heart Centre No 05 Nrupathunga Road Bangalore 560001 ",
    phone: 8022275044,
  },
  {
    key: "32",
    name: "Vydehi Institute Of Medical Sciences & Research Centre.",
    city: "Bengaluru",
    address: "Vydehi Hospital 82 Epip Area Whitefield Bangalore 560066 ",
    phone: 8028413381,
  },
  {
    key: "33",
    name: "SI Vega Hospital Private Limited Regal Hospital ",
    city: "Bengaluru",
    address:
      "No 30 Cmr Complex Chokkanahalli Hegdenagar Main Road Bangalore 560064 ",
    phone: 9902011037,
  },
  {
    key: "34",
    name: "The Eye Foundation ",
    city: "Bengaluru",
    address: "79 5 Outer Ring Road Bellandur Bangalore 560103",
    phone: 9901107032,
  },
  {
    key: "35",
    name: "Sagar Hospitals ",
    city: "Bengaluru",
    address:
      "Sagar Hospitals Shavige Malleshwara Hills Kumarswamy Layout Banashankari Bangalore South 560078",
    phone: 42999999,
  },
  {
    key: "36",
    name: "Nethrakashi Eye Hospital And Micro Surgical Center",
    city: "Bengaluru",
    address:
      "Nethrakashi Eye Hospital And Micro Surgical Center No 33 1St Main Subramanya Pura Main Road Telecom Layout Padmanabhanagar Bangalore South 560061",
    phone: 8026393739,
  },
  {
    key: "37",
    name: "B W Lions Superspeciality Eye Hospital ",
    city: "Bengaluru",
    address:
      "B W Lions Super speciality Eye Hospital 05 Lions Eye Hospital Road Off J C Road Bangalore South 560002",
    phone: 8022121253,
  },
  {
    key: "38",
    name: "Rainbow Childrens Medicare Private Limited ",
    city: "Bengaluru",
    address:
      "Sy No 8 5 Marathalli Kr Puram Outer Ring Road Doddanekundi Marathalli Bengaluru 560037",
    phone: 8884436033,
  },
  {
    key: "39",
    name: "Specialist Health System Pvt Limited ",
    city: "Bengaluru",
    address:
      "Specialist Health System Pvt Limited No 216 7Th Main 80 Ft Road 1 St Block Hrbr Layout Kalayanagar Bangalore 560043",
    phone: 8042522322,
  },
  {
    key: "40",
    name: "Bangalore Nethralaya",
    city: "Bengaluru",
    address:
      "Bangalore Nethralaya 946 21St Main Near Bda Complex Banashankari 2Nd Stage  Bangalore Urban 560070 ",
    phone: 8065375566,
  },
  {
    key: "41",
    name: "Healthcare Global Enterprises Ltd ",
    city: "Bengaluru",
    address:
      "Healthcare Global Enterprises Ltd No44 45 22Nd Cross Raja Rammohan Roy Extn Off Lalbagh Double Road Bangalore 560027 ",
    phone: 8040206000,
  },
  {
    key: "42",
    name: "Vittala International Institute Of Ophthalmology ",
    city: "Bengaluru",
    address:
      "Vittala International Institute Of  Ophthalmology C A Site No 1 2Nd Cross 2Nd Main 7Th Block Banashankari 3Rd Stage  Hosakerehalli Bangalore 560085",
    phone: 8026722214,
  },
  {
    key: "43",
    name: "SSNMC Super Specialty Hospital ",
    city: "Bengaluru",
    address:
      "No 8 Ideal Homes HBCS Layout Rajarajeshwari Nagar Bangalore South 560098",
    phone: 8067666766,
  },
  {
    key: "44",
    name: "The Heart Center",
    city: "Bengaluru",
    address:
      "No3 Millers Tank Bund Road Cunningham Road Opp To Fortune Hotel Vasanth Nagar  Bangalore 560052",
    phone: 8050089110,
  },
  {
    key: "45",
    name: "Samrudhi Eye Hospital",
    city: "Bengaluru",
    address:
      "Samrudhi Eye Hospital No 2 Near Fortuna Vista Apt Kodigehalli Main Road Thindlu Vidyaranyapura Post Bangalore West 560097 ",
    phone: 8042075944,
  },
  {
    key: "46",
    name: "HBS Hospital Trust ",
    city: "Bengaluru",
    address: "No 58 Cockburn road shivajinagar ",
    phone: 9845154577,
  },
  {
    key: "47",
    name: "Rainbow Childrens Medicare Private Limited ",
    city: "Bengaluru",
    address: "Janardhan towers Billekahalli Bannerghatta  Road Bangalore ",
    phone: 9727750540,
  },
  {
    key: "48",
    name: "BGS Global Institute of Medical Science and Hospital ",
    city: "Bengaluru",
    address:
      "No 67 BGS health and education city uttarahalli main road kengeri Bangalore ",
    phone: 8026984812,
  },
  {
    key: "49",
    name: "Aveksha Hospital ",
    city: "Bengaluru",
    address: "122 Varadarajaswamy Layout MS Palya Singapura Bengaluru ",
    phone: 9740291389,
  },
  {
    key: "50",
    name: "ACE Suhas Hospital",
    city: "Bengaluru",
    address: "CA 2 circle Jigani Industrial Area Anekal Bangalore ",
    phone: 98488658119,
  },
  {
    key: "51",
    name: "New Janapriya Super Specialty Hospital ",
    city: "Bengaluru",
    address: "319 East Of NGEF Layout Opposite Sbi Bank Kasturinagar ",
    phone: 9886017227,
  },
  {
    key: "52",
    name: "Nandi Multi Specialty Hospital",
    city: "Bengaluru",
    address: "G F Adjecent to Reception D Cross Road Doddaballapaura ",
    phone: 8147655772,
  },
  {
    key: "53",
    name: "Sri Siddhartha Institute Of Medical Sciences ",
    city: "Bengaluru",
    address: "T Begur Nelamangala Bangalore Rural  ",
    phone: 9900258844,
  },
];

class Main extends Component {
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
        title: "Hospital Name",
        dataIndex: "name",
        key: "name",
        width: "30%",
        ...this.getColumnSearchProps("name"),
      },
      {
        title: "City",
        dataIndex: "city",
        key: "city",
        width: "10%",
        ...this.getColumnSearchProps("age"),
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
    return (
      <div>
          <h3>COVID PRIVATE HOSPITALS</h3>
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}

export default Main;
