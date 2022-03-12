/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Card, Col, Input, Menu, Row, Alert, Image, Typography, Divider, Rate, Button } from 'antd';
import { CheckCircleFilled, SearchOutlined, PlusSquareOutlined, FlagOutlined, PhoneTwoTone, FieldTimeOutlined, DownOutlined, SyncOutlined, EditFilled, MessageFilled, MailOutlined } from '@ant-design/icons';
import indiaImg from "./images/india.png";
import rel from "./images/rel.png";
import tata from "./images/tata.png";
const { SubMenu } = Menu;
const { Title, Text } = Typography;
function App() {
  return (
    <>
      <Row>
        <Col span={6}>
          <Card className='App-Card' title={<b>Filters</b>} 
          extra={
          <a href="#" className='App-Card-Link'>
          <b>Clear</b>
          </a>}
          >
            <Menu
              // onClick={handleClick}
              style={{ width: "auto" }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
            >
              <SubMenu key="sub1" title={<b>Locations</b>}>
                <Input placeholder="Location" prefix={<SearchOutlined />} />
                <Alert className='App-Menu-Search' message={<span className='App-Menu-SearchList' style={{ color: "skyblue" }}><b>Mumbai</b></span>} type="info" closable />
                <Alert className='App-Search-List' message={<span style={{ color: "skyblue" }}><b>Kolkata</b></span>} type="info" closable />
                <Alert className='App-Search-List' message={<span style={{ color: "skyblue" }}><b>Delhi</b></span>} type="info" closable />
              </SubMenu>
              <SubMenu key="sub2" className='App-Menu-List' title={<span><b>Industry</b></span>}></SubMenu>
              <SubMenu key="sub3" title={<span><b>Business Type</b></span>}></SubMenu>
              <SubMenu key="sub4" title={<span><b>Company Type</b></span>}></SubMenu>
              <SubMenu key="sub5" title={<span><b>Filter By High to Low</b></span>}></SubMenu>
              <SubMenu key="sub6" title={<span><b>Sort By</b></span>}></SubMenu>
              <SubMenu key="sub7" title={<span><b>Number of Employees</b></span>}></SubMenu>
            </Menu>
          </Card>
        </Col>
        <Col span={12}>
          <Card className='App-Card-Reliance'>
            <Col span={24}>
              <Row>
                <Col span={4}>
                  <Image
                    src={rel}
                  />
                </Col>
                <Col span={20}>
                  <Title level={5}>
                    <span className='App-Card-Title'>
                      Ad
                    </span>
                    Reliance Industries Ltd.
                    <CheckCircleFilled className='App-Icon-Check'  />
                    <PlusSquareOutlined className='App-Icon-Plus' />
                  </Title>
                  <Text className='App-Card-Text'  type="secondary">Digital Marketing Agency
                    <Image src={indiaImg} className='App-Img-India'  />
                    IN
                  </Text>
                  <Row className='App-Search-List' >
                    <Col span={12}>
                      <ul>
                        <li>Digital Marketing</li>
                        <li  className='App-Search-List'>Gsuite Google Mail</li>
                        <li  className='App-Search-List'>Mob Apps Devlopment</li>
                      </ul>
                    </Col>
                    <Col span={12}>
                      <ul >
                        <li>Web and E-Commerce</li>
                        <li className='App-Search-List'>Branding and Creative</li>
                        <li className='App-Search-List'>IPad Apps  <a>More..</a></li>
                      </ul>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FlagOutlined className='App-Card-Location' />
                      <Text>
                        504, NCB Complex, Plot #43, Sector 11, Opp IDBI Bank, CBD Belapur, Navi Mumbai - 400614
                      </Text>
                    </Col>
                  </Row>

                  <Row className='App-Card-Row'>
                    <Col span={8}><SearchOutlined className='App-Card-Icons' /> Founding Year : 2017</Col>
                    <Col span={8}><PhoneTwoTone className='App-Card-Icons' /> +91 9594 31 5559</Col>
                    <Col span={8}><FieldTimeOutlined className='App-Card-Icons' />Open 8pm Close 8pm
                      <DownOutlined className='App-Card-Row' />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Divider />
            <Row>
              <Col span={20}>
                <Text>Min Order : <b>$ 1000-2000 </b> Team : <b>1-1000 </b> Response Rate : <b>20%</b></Text>
              </Col>
              <Col span={4}>
                <Text style={{ float: "right" }}><SyncOutlined className='App-Icon-Compare' />Compare</Text>
              </Col>
            </Row>
          </Card>
          <Card  className='App-Card-Tata'>
            <Col span={24}>
              <Row>
                <Col span={4}>
                  <Image
                    src={tata}
                  />
                </Col>
                <Col span={20}>
                  <Title level={5}>
                    <span className='App-Card-Title'>
                      Ad
                    </span>
                    Tata Consultancy Services Ltd.
                    <CheckCircleFilled className='App-Icon-Check' />
                    <PlusSquareOutlined className='App-Icon-Plus' />
                  </Title>
                  <Text className='App-Card-Text' type="secondary">Digital Marketing Agency
                    <Image src={indiaImg} className='App-Img-India' />
                    IN
                  </Text>
                  <Row className='App-Search-List'>
                    <Col span={12}>
                      <ul>
                        <li>Digital Marketing</li>
                        <li className='App-Search-List'>Gsuite Google Mail</li>
                        <li className='App-Search-List'>Mob Apps Devlopment</li>
                      </ul>
                    </Col>
                    <Col span={12}>
                      <ul >
                        <li>Web and E-Commerce</li>
                        <li className='App-Search-List'>Branding and Creative</li>
                        <li className='App-Search-List'>IPad Apps  <a>More..</a></li>
                      </ul>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FlagOutlined className='App-Card-Location' />
                      <Text>
                        504, NCB Complex, Plot #43, Sector 11, Opp IDBI Bank, CBD Belapur, Navi Mumbai - 400614
                      </Text>
                    </Col>
                  </Row>

                  <Row className='App-Card-Row'>
                  <Col span={8}><SearchOutlined className='App-Card-Icons' /> Founding Year : 2017</Col>
                    <Col span={8}><PhoneTwoTone className='App-Card-Icons' /> +91 9594 31 5559</Col>
                    <Col span={8}><FieldTimeOutlined className='App-Card-Icons' />Open 8pm Close 8pm
                    <DownOutlined className='App-Card-Row' />
                    </Col>
                  </Row>
                  <Col>
                  </Col>
                </Col>
              </Row>
            </Col>
            <Divider />
            <Row>
              <Col span={20}>
                <Text>Min Order : <b>$ 1000-2000 </b> Team : <b>1-1000 </b> Response Rate : <b>20%</b></Text>
              </Col>
              <Col span={4}>
                <Text style={{ float: "right" }}><SyncOutlined className='App-Icon-Compare' />Compare</Text>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={6}>
          <Card className='App-Card-Rate'>
            <Col>
              <Rate className='App-Rate-Icon' allowHalf defaultValue={3.5} />
            </Col>
            <Col className='App-Menu-Search'>
              <a href='#' className='App-Reviews' >97592 Reviews</a>
            </Col>
            <Col className='App-Rate-Col'>
              <Button type='default' size='large' className='App-Rate-Button'><EditFilled className='App-Rate-Edit'  /><b style={{ color: "#393939" }}>Write Review</b></Button>
            </Col>
            <Row className='App-Rate-Row'>
              <Col span={12}>
                <MessageFilled className='App-Rate-MessageIcon' />
                <Col>Chat now</Col>
              </Col>
              <Col span={12}>
                <MailOutlined className='App-Rate-MainIcon' />
                <Col>Enquiry</Col>
              </Col>
            </Row>
          </Card>
          <Card className='App-Card-Rate'>
            <Col>
              <Rate className='App-Rate-Icon' allowHalf defaultValue={3.5} />
            </Col>
            <Col className='App-Menu-Search'>
              <a href='#' className='App-Reviews' >97592 Reviews</a>
            </Col>
            <Col className='App-Rate-Col'>
              <Button type='default' size='large' className='App-Rate-Button'><EditFilled className='App-Rate-Edit'  /><b style={{ color: "#393939" }}>Write Review</b></Button>
            </Col>
            <Row className='App-Rate-Row'>
              <Col span={12}>
                <MessageFilled className='App-Rate-MessageIcon' />
                <Col>Chat now</Col>
              </Col>
              <Col span={12}>
                <MailOutlined className='App-Rate-MainIcon' />
                <Col>Enquiry</Col>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
}
export default App;