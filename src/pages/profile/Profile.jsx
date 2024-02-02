import React from 'react'
import "./Profile.css"
import QRAngadi from "../../assets/qr-angadi.png"
import Home from "../../assets/home.png"
import Product from "../../assets/products.png"
import QR from "../../assets/profile-qr.png"
import CreateQR from "../../assets/createQR.svg"
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaFilter } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";
import View from "../../assets/View.svg"
import Copy from "../../assets/copy.svg"
import Graph from "../../assets/small-graph.svg"
import Download from "../../assets/download-icon.svg"
import Close from "../../assets/close.svg"
import { IoPersonCircleSharp } from "react-icons/io5";
import User from "../../assets/profile-user.svg"
import Sub from "../../assets/subscriptions.svg"
import Settings from "../../assets/settings.svg"
import Help from "../../assets/help.svg"
 


function Profile() {
    return (
        <div className='profile-container'>
            <div className='sidebar'>
                <div className='logo-image-container'>
                    <img src={QRAngadi} alt='' style={{ width: 100, height: 100, objectFit: 'contain' }} />
                </div>
                <div className='home-link'>
                    <div className='logo-box-image'>
                        <img src={Home} alt='' style={{ width: 20, height: 20 }} />
                    </div>
                    <span style={{ fontFamily: 'Poppins', marginLeft: 10, fontWeight: 'bold', fontSize: 13 }}>Home</span>
                </div>
                <div className='home-link'>
                    <div className='logo-box-image'>
                        <img src={Product} alt='' style={{ width: 20, height: 20 }} />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ fontFamily: 'Poppins', marginLeft: 10, fontWeight: 'bold', fontSize: 13 }}>Product</span>
                        <MdKeyboardArrowRight size={25} style={{ marginLeft: 140 }} />
                    </div>
                </div>
                <div className='home-link-qr'>
                    <div className='logo-box-image-qr'>
                        <img src={QR} alt='' style={{ width: 20, height: 20 }} />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ fontFamily: 'Poppins', marginLeft: 10, fontSize: 13, color: 'white', width: 90 }}>My QR Codes</span>
                        <MdKeyboardArrowRight size={25} style={{ marginLeft: 100, color: 'white' }} />
                    </div>
                </div>
            </div>
            <div className='main-section'>
                <h1 style={{ marginLeft: 20 }}>My QR Codes</h1>
                <span style={{ marginLeft: 20 }}>Create, view, edit, design, and download QR Codes</span>
                <div className='qr-wraper'>
                    <div className='qr-input-container'>
                        <div className='name-box'>
                            <span className='profile-search-name'>Name</span>
                            <MdKeyboardArrowDown size={25} />
                        </div>
                        <input type='text' placeholder='search' className='search-input' />
                        <div style={{ position: 'absolute', right: 90 }}>
                            <MdOutlineSearch />
                        </div>
                        <div className='search-logos'>
                            <FaFilter size={18} />
                            <MdFileDownload size={23} />
                        </div>
                    </div>
                    <div className='create-qr'>
                        <img src={CreateQR} alt='' style={{ height: 40, marginTop: 20, objectFit: 'contain', cursor: 'pointer' }} />
                    </div>
                </div>
                <div>
                    <table style={{ borderCollapse: 'collapse', width: '97%', marginLeft: 20 }}>
                        <thead>
                            <tr style={{ backgroundColor: '#F48020', borderRadius: 20, height: 40 }}>
                                <th className='cellStyle1'><input type="checkbox" /></th>
                                <th className='cellStyleHeader'>QR Code Name</th>
                                <th className='cellStyleHeaderCategory'>Category</th>
                                <th className='cellStyleHeaderType'>Type</th>
                                <th className='cellStyleHeaderType'>Type</th>
                                <th className='cellStyleHeaderActions'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='tableRow'>
                                <td className='cellStyle'>
                                    <input type="checkbox" />
                                </td>
                                <td className='cellStyle'>QR Code Name</td>
                                <td className='cellStyle'>Category</td>
                                <td className='cellStyleType'>Type</td>
                                <td className='cellStyleType'>Type</td>
                                <td className='cellStyleAction'>
                                    <img src={View} alt='' style={{ width: 40, height: 40, padding: 0 }} />
                                    <img src={Copy} alt='' style={{ width: 40, height: 40, padding: 0 }} />
                                    <img src={Graph} alt='' style={{ width: 40, height: 40, padding: 0 }} />
                                    <img src={Download} alt='' style={{ width: 40, height: 40, padding: 0 }} />
                                    <img src={Close} alt='' style={{ width: 40, height: 40, padding: 0 }} />

                                </td>
                            </tr>
                            <tr className='tableRow'>
                                <td className='cellStyle'><input type="checkbox" /></td>
                                <td className='cellStyle'>QR Code Name</td>
                                <td className='cellStyle'>Category</td>
                                <td className='cellStyleType'>Type</td>
                                <td className='cellStyleType'>Type</td>
                                <td className='cellStyleAction'>
                                    <img src={View} alt='' style={{ width: 40, height: 40, padding: 0 }} />
                                    <img src={Copy} alt='' style={{ width: 40, height: 40, padding: 0 }} />
                                    <img src={Graph} alt='' style={{ width: 40, height: 40, padding: 0 }} />
                                    <img src={Download} alt='' style={{ width: 40, height: 40, padding: 0 }} />
                                    <img src={Close} alt='' style={{ width: 40, height: 40, padding: 0 }} />

                                </td>
                            </tr>
                            <tr className='tableRow'>
                                <td className='cellStyle'><input type="checkbox" /></td>
                                <td className='cellStyle'>QR Code Name</td>
                                <td className='cellStyle'>Category</td>
                                <td className='cellStyleType'>Type</td>
                                <td className='cellStyleType'>Type</td>
                                <td className='cellStyleAction'>
                                    <img src={View} alt='' style={{ width: 40, height: 40, padding: 0 }} />
                                    <img src={Copy} alt='' style={{ width: 40, height: 40, padding: 0 }} />
                                    <img src={Graph} alt='' style={{ width: 40, height: 40, padding: 0 }} />
                                    <img src={Download} alt='' style={{ width: 40, height: 40, padding: 0 }} />
                                    <img src={Close} alt='' style={{ width: 40, height: 40, padding: 0 }} />

                                </td>
                            </tr>
                            <tr className='tableRow'>
                                <td className='cellStyle'><input type="checkbox" /></td>
                                <td className='cellStyle'>QR Code Name</td>
                                <td className='cellStyle'>Category</td>
                                <td className='cellStyleType'>Type</td>
                                <td className='cellStyleType'>Type</td>
                                <td className='cellStyleAction'>
                                    <img src={View} alt='' style={{ width: 40, height: 40, padding: 0 }} />
                                    <img src={Copy} alt='' style={{ width: 40, height: 40, padding: 0 }} />
                                    <img src={Graph} alt='' style={{ width: 40, height: 40, padding: 0 }} />
                                    <img src={Download} alt='' style={{ width: 40, height: 40, padding: 0 }} />
                                    <img src={Close} alt='' style={{ width: 40, height: 40, padding: 0 }} />

                                </td>
                            </tr>
                            <tr className='tableRow'>
                                <td className='cellStyle'><input type="checkbox" /></td>
                                <td className='cellStyle'>QR Code Name</td>
                                <td className='cellStyle'>Category</td>
                                <td className='cellStyleType'>Type</td>
                                <td className='cellStyleType'>Type</td>
                                <td className='cellStyleAction'>
                                    <img src={View} alt='' style={{ width: 40, height: 40, padding: 0 }} />
                                    <img src={Copy} alt='' style={{ width: 40, height: 40, padding: 0 }} />
                                    <img src={Graph} alt='' style={{ width: 40, height: 40, padding: 0 }} />
                                    <img src={Download} alt='' style={{ width: 40, height: 40, padding: 0 }} />
                                    <img src={Close} alt='' style={{ width: 40, height: 40, padding: 0 }} />

                                </td>
                            </tr>
                            <tr className='tableRow'>
                                <td className='cellStyle'><input type="checkbox" /></td>
                                <td className='cellStyle'>QR Code Name</td>
                                <td className='cellStyle'>Category</td>
                                <td className='cellStyleType'>Type</td>
                                <td className='cellStyleType'>Type</td>
                                <td className='cellStyleAction'>
                                    <img src={View} alt='' style={{ width: 40, height: 40, padding: 0 }} />
                                    <img src={Copy} alt='' style={{ width: 40, height: 40, padding: 0 }} />
                                    <img src={Graph} alt='' style={{ width: 40, height: 40, padding: 0 }} />
                                    <img src={Download} alt='' style={{ width: 40, height: 40, padding: 0 }} />
                                    <img src={Close} alt='' style={{ width: 40, height: 40, padding: 0 }} />

                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
            <div className='rightbar'>
                <div className='profile-tab'>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <IoPersonCircleSharp size={25} />
                        <span style={{ fontSize: 12 }}>Sravan Kumar</span>
                    </div>
                    <MdKeyboardArrowDown size={25} />
                </div>
                <div className='rightTab-containetr'>

                    <div className='rightbar-tabs'>
                        <img src={User} alt='' style={{width:30,height:40,marginLeft:10}} />
                        <span style={{marginLeft:10,color:'#3D3D3D',fontSize:15}}>My Account</span>
                    </div>
                    <div className='rightbar-tabs'>
                    <img src={Sub} alt='' style={{width:30,height:40,marginLeft:10}} />
                        <span style={{marginLeft:10,color:'#3D3D3D',fontSize:15}}>My Subscription</span>
                    </div>
                    <div className='rightbar-tabs'>
                    <img src={Settings} alt='' style={{width:30,height:40,marginLeft:10}} />
                        <span style={{marginLeft:10,color:'#3D3D3D',fontSize:15}}>Settings</span>
                    </div>
                    <div className='rightbar-tabs'>
                    <img src={Help} alt='' style={{width:30,height:40,marginLeft:10}} />
                        <span style={{marginLeft:10,color:'#3D3D3D',fontSize:15}}>Help & Support</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile