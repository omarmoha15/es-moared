/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import Image from 'next/image';
import Backgroundimage from '../../public/assets/images/v16_150.png'
import Logoimage from '../../public/v16_193.png'
import sign1 from '../../public/assets/images/v25_2.png'
import sign2 from '../../public/assets/images/v25_3.png'
import sign3 from '../../public/assets/images/v21_2.png'



const Emp_ar = ({ data }) => {
  const [userData, setUserData] = useState({});

  const createPDF = async () => {
    const pdf = new jsPDF('portrait', 'pt', 'a4');
    const data = await html2canvas(document.querySelector('#pdf'));
    const img = data.toDataURL('image/jpg');
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, 'JPG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('شهادة تعريف راتب.pdf');
  }



  return (
    <div className="d-flex flex-column bg-light justify-content-center text-center">
      <button
        className="bg-green-500 text-white uppercase py-2 px-4 font-semibold rounded-xl cursor-pointer"
        style={{ backgroundColor: '#43bf6c', color: '#fff' }}
        onClick={createPDF}
        type="button"
      >
        طباعة
      </button>
      <div className="box-border text-base">
      <div
        className="mx-auto text-center"
        style={{
          boxSizing: 'border-box',
          width: '700px', // Adjust this width to match the container's width
          height: '970px', // Adjust this height to match the container's height
          padding: '20px 14px',
          opacity: 1,
          position: 'relative',
          top: '0px',
          left: '0px',
          overflow: 'hidden',
        }}
        id="pdf"
      >
        <Image src={Backgroundimage} alt="Logo" style={{ width: '700px', opacity: 0.5 }} />
            <div
              style={{
                boxSizing: 'border-box',
                width: '657px',
                height: '44px',
                // background: 'rgba(60, 193, 137, 0.25)',
                opacity: 0.2,
                position: 'absolute',
                top: '162px',
                left: '28px',
                border: '1px solid rgba(0, 0, 0, 0.29)',
                borderRadius: '10px',
                overflow: 'hidden',
              }}
            />
            <span
              style={{
                boxSizing: 'border-box',
                width: '124px',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '165px',
                left: '290px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '16px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              شهادة تعريف راتب
            </span>
          
            <div
              style={{
                boxSizing: 'border-box',
                width: '658px',
                height: '353px',
                background: 'rgba(238, 238, 238, 0.48)',
                opacity: 1,
                position: 'absolute',
                top: '229px',
                left: '29px',
                border: '1px solid rgba(0, 0, 0, 0.26)',
                borderRadius: '10px',
                boxShadow: 'rgba(0, 0, 0, 0.13) 0px 1px 8px',
                overflow: 'hidden',
              }}
            />
           
            <span
              style={{
                boxSizing: 'border-box',
                width: '46px',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '248px',
                left: '628px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '16px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              الإسم
            </span>
            <span
              style={{
                boxSizing: 'border-box',
                width: '53px',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '302px',
                left: '626px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '16px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              المرتبة
            </span>
            <span
              style={{
                boxSizing: 'border-box',
                width: '56px',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '303px',
                left: '306px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '16px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              الدرجة
            </span>
            <span
              style={{
                boxSizing: 'border-box',
                width: '65px',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '357px',
                left: '615px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '16px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              الوظيفة
            </span>
            <span
              style={{
                boxSizing: 'border-box',
                width: '111px',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '416px',
                left: '249px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '16px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              الراتب الاساسي
            </span>
            <span
              style={{
                boxSizing: 'border-box',
                width: '84px',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '246px',
                left: '275px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '16px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              رقم الهوية
            </span>
            <span
              style={{
                boxSizing: 'border-box',
                width: '73px',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '469px',
                left: '606px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '16px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              بدل النقل
            </span>
            <span
              style={{
                boxSizing: 'border-box',
                width: '88px',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '468px',
                left: '270px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '16px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              حسم التقاعد
            </span>
            <span
              style={{
                boxSizing: 'border-box',
                width: '56px',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '527px',
                left: '622px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '16px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              البدلات
            </span>
            <span
              style={{
                boxSizing: 'border-box',
                width: '98px',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '526px',
                left: '261px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '16px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              حسميات اخرى
            </span>
            <span
              style={{
                boxSizing: 'border-box',
                width: '47px',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '420px',
                left: '630px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '16px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              الادارة
            </span>
            <span
              style={{
                boxSizing: 'border-box',
                width: '100px',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '357px',
                left: '259px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '16px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              تاريخ المباشرة
            </span>
           
            <div
              style={{
                boxSizing: 'border-box',
                width: '208px',
                height: '35px',
                opacity: 1,
                position: 'absolute',
                top: '248px',
                left: '385px',
                border: '1px solid rgb(0, 0, 0)',
                borderRadius: '9px',
                overflow: 'hidden',
              }}
            >
              {userData.full_name}
            </div>
            <div
              style={{
                boxSizing: 'border-box',
                width: '208px',
                height: '35px',
                opacity: 1,
                position: 'absolute',
                top: '249px',
                left: '41px',
                border: '1px solid rgb(0, 0, 0)',
                borderRadius: '9px',
                overflow: 'hidden',
              }}
            >
              {userData.emp_no}
            </div>
            <div
              style={{
                boxSizing: 'border-box',
                width: '208px',
                height: '35px',
                opacity: 1,
                position: 'absolute',
                top: '304px',
                left: '385px',
                border: '1px solid rgb(0, 0, 0)',
                borderRadius: '9px',
                overflow: 'hidden',
              }}
            >
              {userData.empjobrank}
            </div>
            <div
              style={{
                boxSizing: 'border-box',
                width: '208px',
                height: '35px',
                opacity: 1,
                position: 'absolute',
                top: '305px',
                left: '41px',
                border: '1px solid rgb(0, 0, 0)',
                borderRadius: '9px',
                overflow: 'hidden',
              }}
            >
              {userData.empjobgrade}
            </div>
            <div
              style={{
                boxSizing: 'border-box',
                width: '208px',
                height: '35px',
                opacity: 1,
                position: 'absolute',
                top: '360px',
                left: '385px',
                border: '1px solid rgb(0, 0, 0)',
                borderRadius: '9px',
                overflow: 'hidden',
              }}
            >
              {userData.empjobtitle}
            </div>
            <div
              style={{
                boxSizing: 'border-box',
                width: '208px',
                height: '35px',
                opacity: 1,
                position: 'absolute',
                top: '361px',
                left: '41px',
                border: '1px solid rgb(0, 0, 0)',
                borderRadius: '9px',
                overflow: 'hidden',
              }}
            >
              {userData.govemploymentdt}
            </div>
            <div
              style={{
                boxSizing: 'border-box',
                width: '208px',
                height: '35px',
                opacity: 1,
                position: 'absolute',
                top: '528px',
                left: '385px',
                border: '1px solid rgb(0, 0, 0)',
                borderRadius: '9px',
                overflow: 'hidden',
              }}
            >
              لايوجد
            </div>
            <div
              style={{
                boxSizing: 'border-box',
                width: '208px',
                height: '35px',
                opacity: 1,
                position: 'absolute',
                top: '529px',
                left: '41px',
                border: '1px solid rgb(0, 0, 0)',
                borderRadius: '9px',
                overflow: 'hidden',
              }}
            >
              لايوجد
            </div>
            <div
              style={{
                boxSizing: 'border-box',
                width: '208px',
                height: '35px',
                opacity: 1,
                position: 'absolute',
                top: '416px',
                left: '385px',
                border: '1px solid rgb(0, 0, 0)',
                borderRadius: '9px',
                overflow: 'hidden',
              }}
            >
              (لايوجد)
            </div>
            <div
              style={{
                boxSizing: 'border-box',
                width: '208px',
                height: '35px',
                opacity: 1,
                position: 'absolute',
                top: '417px',
                left: '41px',
                border: '1px solid rgb(0, 0, 0)',
                borderRadius: '9px',
                overflow: 'hidden',
              }}
            >
              {/* {sal.basicsalary} */}
            </div>
            <div
              style={{
                boxSizing: 'border-box',
                width: '208px',
                height: '35px',
                opacity: 1,
                position: 'absolute',
                top: '472px',
                left: '385px',
                border: '1px solid rgb(0, 0, 0)',
                borderRadius: '9px',
                overflow: 'hidden',
              }}
            >
              {/* {sal.badal1} */}
            </div>
            <div
              style={{
                boxSizing: 'border-box',
                width: '208px',
                height: '35px',
                opacity: 1,
                position: 'absolute',
                top: '473px',
                left: '41px',
                border: '1px solid rgb(0, 0, 0)',
                borderRadius: '9px',
                overflow: 'hidden',
              }}
            >
              {/* {(sal.basicsalary * 9) / 100} */}
            </div>
     
            <span
              style={{
                boxSizing: 'border-box',
                width: '661px',
                color: 'rgb(13, 17, 15)',
                position: 'absolute',
                top: '590px',
                left: '25px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '14px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              تشهد الادارة العامة للموارد البشرية في إمارة منطقة عسير بأن الموظف الموضح اسمه وبيانته
              اعلاه احد منسوبيها ولا يزال على رأس العمل حتى تاريخه وبناء على طلبه اعطي هذا المشهد
              لتقديمه إلى من يهمه الامر والله الموفق .
            </span>
          
            <span
              style={{
                boxSizing: 'border-box',
                width: '129px',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '690px',
                left: '535px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '16px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              مدير شعبة الرواتب{' '}
            </span>
            <span
              style={{
                boxSizing: 'border-box',
                width: '130px',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '758px',
                left: '538px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '16px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              أحمد زاهر آل مشاري
            </span>
            <span
              style={{
                boxSizing: 'border-box',
                width: '187px',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '690px',
                left: '35px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '16px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              مدير عمليات الموارد البشرية{' '}
            </span>
            <span
              style={{
                boxSizing: 'border-box',
                width: '120px',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '758px',
                left: '72px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '16px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              أحمد فايع الألمعي
            </span>
            <Image
              src={sign3}
              alt="Logo"
              style={{
                height: '112px',
                width: '120px',
                top: '689px',
                left: '317px',
                position: 'absolute',
                fontSize: '16px',
              }}
            />
            <div
              style={{
                boxSizing: 'border-box',
                width: '120px',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '758px',
                left: '72px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '16px',
                opacity: 1,
                textAlign: 'center',
              }}
            />
            <div
              style={{
                boxSizing: 'border-box',
                width: '127px',
                height: '49px',
                backgroundImage: `url(${sign1}) `,
                opacity: 1,
                position: 'absolute',
                top: '708px',
                left: '73px',
                overflow: 'hidden',
              }}
            />
            <Image
              src={sign1}
              alt="Logo"
              style={{ width: '112px', top: '708px', left: '73px', position: 'absolute' }}
            />
            <div
              style={{
                boxSizing: 'border-box',
                width: '109px',
                height: '63px',
                opacity: 1,
                position: 'absolute',
                top: '709px',
                left: '556px',
                overflow: 'hidden',
              }}
            />
            <Image
              src={sign2}
              alt="Logo"
              style={{
                height: '63px',
                width: '109px',
                top: '709px',
                left: '544px',
                position: 'absolute',
              }}
            />
         
            <div
              style={{
                boxSizing: 'border-box',
                width: '658px',
                height: '122px',
                background: 'rgba(238, 238, 238, 0.44)',
                opacity: 1,
                position: 'absolute',
                top: '18px',
                left: '27px',
                border: '1px solid rgba(0, 0, 0, 0.17)',
                borderRadius: '10px',
                boxShadow: 'rgba(0, 0, 0, 0.13) 0px 1px 8px',
                overflow: 'hidden',
              }}
            />
          
            <div
              style={{
                boxSizing: 'border-box',
                width: '85px',
                height: '109px',
                opacity: 1,
                position: 'absolute',
                top: '24px',
                left: '315px',
                overflow: 'hidden',
              }}
            />
            <Image
              src={Logoimage}
              alt="Logo"
              style={{ width: '85px', top: '24px', left: '315px', position: 'absolute' }}
            />
            <span
              style={{
                boxSizing: 'border-box',
                width: '150px',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '35px',
                left: '509px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '14px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              المملكة العربية السعودية{' '}
            </span>
            <span
              style={{
                boxSizing: 'border-box',
                width: '150px',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '65px',
                left: '509px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '14px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              وزارة الداخلية
            </span>
            <span
              style={{
                boxSizing: 'border-box',
                width: '150px',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '95px',
                left: '509px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '14px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              إمارة منطقة عسير
            </span>
           
            <span
              style={{
                boxSizing: 'border-box',
                width: 'auto',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '36px',
                left: '138px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '14px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              التاريخ []{' '}
            </span>
            <span
              style={{
                boxSizing: 'border-box',
                width: 'auto',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '65px',
                left: '138px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '14px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              الرقم المرجعي []{' '}
            </span>
            <span
              style={{
                boxSizing: 'border-box',
                width: 'auto',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '95px',
                left: '138px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '14px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              المصدر []{' '}
            </span>
           
            <div
              style={{
                boxSizing: 'border-box',
                width: '357px',
                height: '64px',
                background: 'rgba(221, 221, 221, 0.71)',
                opacity: 1,
                position: 'absolute',
                top: '975px',
                left: '330px',
                borderRadius: '8px',
                border: '1px solid rgb(139, 139, 139)',
              }}
            />
            <span
              style={{
                boxSizing: 'border-box',
                width: '334px',
                color: 'rgb(3, 2, 43)',
                position: 'absolute',
                top: '981px',
                left: '342px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '13px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              هذا المستند موقع ومختم من النظام ولا يحتاج توقيع او ختم للتحقق من المستند من الرابط :-
              verify.aseer.gov.sa{' '}
            </span>
           
            <div
              style={{
                boxSizing: 'border-box',
                width: '68px',
                height: '64px',
                background: 'rgba(231, 231, 231, 0.74)',
                opacity: 1,
                position: 'absolute',
                top: '975px',
                left: '25px',
                border: '1px solid rgb(139, 139, 139)',
                borderRadius: '8px',
              }}
            />
            <span
              style={{
                boxSizing: 'border-box',
                width: '43px',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '984px',
                left: '36px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '16px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              QR
            </span>
          
          </div>
    </div>
    </div>
  );
};

export default Emp_ar;
