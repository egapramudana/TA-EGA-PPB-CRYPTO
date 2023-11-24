// About.js
import React from 'react';
import logo1 from "../images/logo1.png";
import logo2 from "../images/logo2.jpg";
import logo3 from "../images/logo3.jpg";
import './About.css'

const About = () => {
  return (
    <div className='about' id='about'>
        <div className='container'>
            <h2>A b o u t</h2>
            <span className='line'></span>
            <div className='content'>
                <div className='card'>
                    <img src={logo1} alt='logo1'/>
                    <p><span>React.Js</span></p>
                    <p>React.js adalah pustaka JavaScript yang digunakan untuk membangun antarmuka pengguna (UI) dalam pengembangan aplikasi web. Dikembangkan oleh Facebook, React.js memungkinkan pengembang untuk membuat komponen UI yang dapat diatur dan diperbarui secara efisien ketika data berubah. Pendekatan ini dikenal sebagai "reactive" atau "declarative," yang membuat pengembangan aplikasi lebih mudah dipahami dan dipelihara.</p>
                </div>
                <div className='card'>
                    <img src={logo2} alt='logo1'style={{height: '190px'}}/>
                    <p><span>CoinGecko API</span></p>
                    <p>CoinGecko adalah API yang menyediakan data mengenai mata uang kripto. Pengembang dapat mengakses informasi seperti harga, volume perdagangan, kapitalisasi pasar, dan metrik lainnya melalui permintaan HTTP ke endpoint API. Ini memungkinkan integrasi data mata uang kripto ke dalam aplikasi atau situs web pengembang.</p>
                </div>
                <div className='card'>
                    <img src={logo3} alt='logo1' style={{height: '190px'}}/>
                    <p><span>Visual Studio Code</span></p>
                    <p>Visual Studio Code (VS Code) adalah sebuah editor teks sumber terbuka yang dikembangkan oleh Microsoft. Meskipun disebut "Visual Studio," VS Code berbeda dari Visual Studio, yang merupakan Integrated Development Environment (IDE) lengkap. VS Code lebih ringan dan dirancang khusus sebagai editor teks yang kuat untuk pengembangan berbagai jenis aplikasi.</p>
                </div>
            </div>
        </div>
    </div>
)
}
export default About;
