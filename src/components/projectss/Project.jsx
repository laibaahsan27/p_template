import React from "react";
import Card from "../cards/Card.jsx";
import data from "../cards/data.js";
import "./Project.css";
import photo from "../../images/Group 5.png";
import photo2 from "../../images/Group 22.png";
const Project = () => {
  return (
    <div id="projects-section" style={{ marginTop: "70px" }}>
      {/* <div style={{textAlign:'center'}}>
        <p id='project-head'>PROJECTS</p>
        <span className='subtext-project'>Recent</span>
      </div> */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={photo} alt="" className="PD-img" />
        {/* <img src={photo2} alt="" className="PM-img" /> */}
        <svg
          width="300"
          height="72"
          viewBox="0 0 207 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="PM-img"
        >
          <g filter="url(#filter0_d_260_85)">
            <path
              d="M13.8281 56V14.75H24.7266C27.0078 14.75 28.8125 15.2578 30.1406 16.2734C31.4844 17.2891 32.4453 18.7344 33.0234 20.6094C33.6016 22.4844 33.8906 24.7188 33.8906 27.3125C33.8906 29.8125 33.6484 31.9922 33.1641 33.8516C32.6797 35.6953 31.8125 37.125 30.5625 38.1406C29.3281 39.1562 27.5703 39.6641 25.2891 39.6641H21.9375V56H13.8281ZM21.9375 32.2578H22.4062C23.9375 32.2578 24.875 31.8281 25.2188 30.9688C25.5625 30.1094 25.7344 28.8438 25.7344 27.1719C25.7344 25.6094 25.5625 24.4062 25.2188 23.5625C24.8906 22.7031 24.1016 22.2734 22.8516 22.2734H21.9375V32.2578ZM38.9156 56V14.75H51.5719C53.6812 14.75 55.275 15.2344 56.3531 16.2031C57.4312 17.1562 58.15 18.5 58.5094 20.2344C58.8844 21.9531 59.0719 23.9766 59.0719 26.3047C59.0719 28.5547 58.7828 30.3516 58.2047 31.6953C57.6422 33.0391 56.5719 33.9688 54.9937 34.4844C56.2906 34.75 57.1969 35.3984 57.7125 36.4297C58.2437 37.4453 58.5094 38.7656 58.5094 40.3906V56H50.3766V39.8516C50.3766 38.6484 50.1266 37.9062 49.6266 37.625C49.1422 37.3281 48.3531 37.1797 47.2594 37.1797V56H38.9156ZM47.3062 30.0312H49.2984C50.4391 30.0312 51.0094 28.7891 51.0094 26.3047C51.0094 24.6953 50.8844 23.6406 50.6344 23.1406C50.3844 22.6406 49.9156 22.3906 49.2281 22.3906H47.3062V30.0312ZM74.0344 56.375C70.7375 56.375 68.2141 55.3828 66.4641 53.3984C64.7297 51.3984 63.8625 48.5156 63.8625 44.75V25.1562C63.8625 21.625 64.7219 18.9453 66.4406 17.1172C68.175 15.2891 70.7062 14.375 74.0344 14.375C77.3625 14.375 79.8859 15.2891 81.6047 17.1172C83.3391 18.9453 84.2062 21.625 84.2062 25.1562V44.75C84.2062 48.5156 83.3312 51.3984 81.5812 53.3984C79.8469 55.3828 77.3312 56.375 74.0344 56.375ZM74.1047 48.7812C75.3547 48.7812 75.9797 47.5703 75.9797 45.1484V25.0156C75.9797 22.9844 75.3703 21.9688 74.1516 21.9688C72.7766 21.9688 72.0891 23.0078 72.0891 25.0859V45.1953C72.0891 46.4766 72.2453 47.3984 72.5578 47.9609C72.8703 48.5078 73.3859 48.7812 74.1047 48.7812ZM99.075 56.375C97.2156 56.375 95.5203 56.0156 93.9891 55.2969C92.4578 54.5781 91.2391 53.5156 90.3328 52.1094C89.4422 50.6875 88.9969 48.9453 88.9969 46.8828V36.5469H97.1531V46.3906C97.1531 47.1094 97.2937 47.6875 97.575 48.125C97.8719 48.5625 98.3406 48.7812 98.9812 48.7812C100.216 48.7812 100.833 48.0234 100.833 46.5078V14.75H109.153V45.6875C109.153 47.875 108.723 49.7734 107.864 51.3828C107.005 52.9766 105.817 54.2109 104.302 55.0859C102.786 55.9453 101.044 56.375 99.075 56.375ZM114.741 56V14.75H131.241V22.7188H123.131V30.7578H130.912V38.5156H123.131V47.9609H131.78V56H114.741ZM146.531 56.375C143.547 56.375 141.141 55.4453 139.312 53.5859C137.5 51.7266 136.594 49.125 136.594 45.7812V26.75C136.594 22.75 137.383 19.6875 138.961 17.5625C140.555 15.4375 143.141 14.375 146.719 14.375C148.672 14.375 150.406 14.7344 151.922 15.4531C153.453 16.1719 154.656 17.25 155.531 18.6875C156.406 20.1094 156.844 21.9062 156.844 24.0781V31.2031H148.641V25.1094C148.641 23.875 148.484 23.0469 148.172 22.625C147.859 22.1875 147.375 21.9688 146.719 21.9688C145.953 21.9688 145.438 22.25 145.172 22.8125C144.906 23.3594 144.773 24.0938 144.773 25.0156V45.6641C144.773 46.8047 144.938 47.6094 145.266 48.0781C145.609 48.5469 146.094 48.7812 146.719 48.7812C147.422 48.7812 147.914 48.4922 148.195 47.9141C148.492 47.3359 148.641 46.5859 148.641 45.6641V38.2344H156.938V46.0391C156.938 49.6641 156.023 52.2969 154.195 53.9375C152.367 55.5625 149.812 56.375 146.531 56.375ZM165.642 56V22.6719H160.744V14.75H178.791V22.6719H173.892V56H165.642ZM193.284 56.375C189.519 56.375 186.8 55.4375 185.128 53.5625C183.472 51.6875 182.644 48.7031 182.644 44.6094V40.5781H190.8V45.7344C190.8 46.6875 190.941 47.4375 191.222 47.9844C191.519 48.5156 192.027 48.7812 192.745 48.7812C193.495 48.7812 194.011 48.5625 194.292 48.125C194.589 47.6875 194.738 46.9688 194.738 45.9688C194.738 44.7031 194.613 43.6484 194.363 42.8047C194.113 41.9453 193.675 41.1328 193.05 40.3672C192.441 39.5859 191.589 38.6797 190.495 37.6484L186.792 34.1328C184.027 31.5234 182.644 28.5391 182.644 25.1797C182.644 21.6641 183.456 18.9844 185.081 17.1406C186.722 15.2969 189.089 14.375 192.183 14.375C195.964 14.375 198.644 15.3828 200.222 17.3984C201.816 19.4141 202.613 22.4766 202.613 26.5859H194.222V23.75C194.222 23.1875 194.058 22.75 193.73 22.4375C193.417 22.125 192.988 21.9688 192.441 21.9688C191.784 21.9688 191.3 22.1562 190.988 22.5312C190.691 22.8906 190.542 23.3594 190.542 23.9375C190.542 24.5156 190.698 25.1406 191.011 25.8125C191.323 26.4844 191.941 27.2578 192.863 28.1328L197.62 32.7031C198.573 33.6094 199.448 34.5703 200.245 35.5859C201.042 36.5859 201.683 37.7578 202.167 39.1016C202.652 40.4297 202.894 42.0547 202.894 43.9766C202.894 47.8516 202.175 50.8906 200.738 53.0938C199.316 55.2812 196.831 56.375 193.284 56.375Z"
              fill="#153D8C"
            />
          </g>
          <path
            d="M6.46825 62.1711C6.28329 62.1963 6.10435 62.1668 5.93143 62.0827C5.77171 61.9968 5.63065 61.8007 5.50823 61.4944C5.38401 61.1749 5.27876 60.6981 5.19246 60.0639C5.01266 58.7428 4.96018 57.4177 5.03501 56.0888C5.10983 54.7599 5.30113 53.4959 5.60892 52.2968C5.9149 51.0845 6.32564 49.9992 6.84114 49.0409C7.36804 48.0677 7.98708 47.277 8.69824 46.6688C9.42261 46.0589 10.2274 45.6937 11.1126 45.5733C12.077 45.442 12.8771 45.6359 13.5129 46.1549C14.1469 46.6607 14.5376 47.4553 14.685 48.5386C14.8217 49.5427 14.6509 50.4137 14.1727 51.1516C13.7077 51.8877 12.9798 52.3231 11.9889 52.458C11.8172 52.4814 11.6304 52.4933 11.4286 52.4939C11.2251 52.4812 11.0131 52.4562 10.7927 52.4189C11.782 53.6568 12.747 54.7164 13.6878 55.5976C14.6285 56.4788 15.569 57.2591 16.5092 57.9385C17.4608 58.6029 18.4221 59.2391 19.3929 59.8471C19.5412 59.948 19.6565 60.0534 19.7387 60.1634C19.8192 60.2601 19.8693 60.3811 19.889 60.5264C19.9196 60.751 19.8892 60.9233 19.7979 61.0434C19.7198 61.1617 19.5288 61.2415 19.225 61.2829C18.8947 61.3278 18.4654 61.2382 17.937 61.0141C17.4218 60.7882 16.846 60.4628 16.2096 60.0381C15.5732 59.6134 14.9212 59.1235 14.2536 58.5684C13.5859 58.0134 12.9346 57.4292 12.2994 56.8159C11.6756 56.1876 11.1074 55.572 10.5948 54.9689C10.0803 54.3527 9.65891 53.7776 9.33058 53.2436C9.01546 52.7079 8.83093 52.2419 8.777 51.8455C8.74104 51.5813 8.77923 51.3675 8.89157 51.2042C9.00211 51.0277 9.16968 50.9241 9.39427 50.8936C9.68493 50.854 9.95455 50.8577 10.2031 50.9046C10.465 50.9497 10.7346 50.9534 11.012 50.9156C11.7387 50.8167 12.2882 50.5536 12.6606 50.1261C13.0445 49.6837 13.177 49.0264 13.0584 48.1545C12.9541 47.3882 12.3867 47.0752 11.3562 47.2154C10.6428 47.3125 9.99445 47.6901 9.41118 48.348C8.82611 48.9928 8.32716 49.8748 7.9143 50.9941C7.51467 52.1115 7.23627 53.4277 7.07913 54.9427C6.92019 56.4446 6.91013 58.101 7.04895 59.9122C7.10703 60.5367 7.11051 61.0072 7.05938 61.3237C7.02146 61.6383 6.95024 61.8566 6.84572 61.9785C6.75261 62.0853 6.62679 62.1496 6.46825 62.1711ZM29.2652 50.5914C29.3227 51.0141 29.2472 51.4483 29.0387 51.8938C28.8284 52.3261 28.5305 52.7569 28.1448 53.1861C27.7574 53.6022 27.321 54.0047 26.8357 54.3937C26.3504 54.7827 25.8597 55.132 25.3636 55.4418C24.8675 55.7515 24.4113 56.0087 23.9951 56.2133C23.9595 56.743 23.9687 57.206 24.0227 57.6023C24.0568 57.8533 24.1405 58.0236 24.2738 58.1131C24.4071 58.2026 24.5993 58.2303 24.8503 58.1961C25.4052 58.1206 25.9796 57.9415 26.5736 57.6588C27.1676 57.3762 27.7666 57.0322 28.3709 56.6271C28.9751 56.2219 29.5502 55.8005 30.0962 55.3629C30.6421 54.9253 31.138 54.5147 31.5836 54.1311C32.0425 53.7457 32.4236 53.4314 32.727 53.1883C33.0303 52.9452 33.2348 52.8164 33.3405 52.802C33.499 52.7804 33.6251 52.8171 33.7188 52.912C33.8238 52.9919 33.8853 53.0979 33.9033 53.23C33.9177 53.3357 33.7804 53.563 33.4915 53.9118C33.2158 54.2588 32.8349 54.674 32.349 55.1572C31.8613 55.6273 31.3093 56.1195 30.693 56.634C30.0768 57.1485 29.4305 57.6401 28.7542 58.1089C28.0911 58.5759 27.4379 58.9676 26.7947 59.2839C26.1647 59.5984 25.5855 59.7916 25.057 59.8635C24.37 59.957 23.7999 59.7722 23.3466 59.3091C22.8934 58.8459 22.593 58.0727 22.4456 56.9894C22.3467 56.2627 22.3394 55.5169 22.4237 54.7519C22.5212 53.9851 22.6892 53.2423 22.9278 52.5236C23.1778 51.7898 23.4717 51.1308 23.8093 50.5466C24.1584 49.9474 24.5434 49.4644 24.9645 49.0976C25.3837 48.7176 25.8113 48.498 26.2473 48.4386C27.0796 48.3254 27.7651 48.4676 28.3036 48.8653C28.8422 49.2629 29.1627 49.8383 29.2652 50.5914ZM24.2036 54.6308C24.579 54.324 24.9658 54.0022 25.3641 53.6655C25.7623 53.3287 26.1266 52.9898 26.4569 52.6488C26.7873 52.3078 27.0432 51.9635 27.2247 51.6159C27.4175 51.2532 27.4906 50.9001 27.4438 50.5566C27.3773 50.0678 27.0798 49.8594 26.5514 49.9313C26.2211 49.9762 25.8997 50.2352 25.5873 50.7084C25.2864 51.1665 25.0157 51.7483 24.7753 52.4538C24.5349 53.1593 24.3443 53.885 24.2036 54.6308ZM36.1832 58.6319C35.5358 58.72 34.9545 58.6511 34.4394 58.4252C33.9356 58.1843 33.5259 57.8431 33.2101 57.4016C32.8944 56.9601 32.7024 56.4884 32.634 55.9864C32.4902 54.9294 32.5439 53.9398 32.7952 53.0175C33.0446 52.082 33.401 51.2396 33.8642 50.4903C34.3388 49.726 34.841 49.0656 35.3708 48.509C35.9138 47.9507 36.4135 47.5194 36.87 47.2151C37.3378 46.8957 37.6775 46.7217 37.8889 46.6929C38.3116 46.6354 38.5518 46.818 38.6093 47.2408C38.6363 47.4389 38.5356 47.6881 38.3074 47.9883C38.0773 48.2753 37.7808 48.6184 37.418 49.0176C37.0552 49.4169 36.6723 49.8659 36.2692 50.3648C35.8643 50.8505 35.494 51.3921 35.1581 51.9895C34.8205 52.5737 34.5645 53.2141 34.3902 53.9106C34.214 54.5939 34.179 55.3253 34.2851 56.1048C34.393 56.8975 34.7706 57.2498 35.4179 57.1617C36.0125 57.0808 36.6049 56.8858 37.1953 56.5767C37.7989 56.2658 38.3803 55.8906 38.9395 55.4512C39.5101 54.9968 40.0524 54.5328 40.5666 54.0591C41.0808 53.5854 41.5448 53.1388 41.9586 52.7192C42.3707 52.2863 42.72 51.936 43.0065 51.6683C43.293 51.4005 43.5023 51.2577 43.6344 51.2397C43.8987 51.2037 44.0506 51.3311 44.0901 51.6217C44.1207 51.8463 44.0092 52.1643 43.7557 52.5755C43.5022 52.9868 43.1474 53.4455 42.6915 53.9516C42.2356 54.4577 41.7211 54.9785 41.1481 55.514C40.5733 56.0363 39.9873 56.5264 39.3903 56.9844C38.7915 57.4292 38.2101 57.8044 37.6462 58.1099C37.0936 58.4004 36.606 58.5744 36.1832 58.6319ZM50.8436 47.6548C50.9011 48.0776 50.8257 48.5117 50.6172 48.9573C50.4069 49.3896 50.1089 49.8203 49.7233 50.2496C49.3358 50.6656 48.8994 51.0682 48.4141 51.4572C47.9288 51.8461 47.4381 52.1955 46.942 52.5052C46.4459 52.815 45.9898 53.0721 45.5736 53.2768C45.538 53.8064 45.5472 54.2694 45.6011 54.6658C45.6353 54.9168 45.719 55.0871 45.8523 55.1766C45.9856 55.2661 46.1777 55.2938 46.4287 55.2596C46.9836 55.1841 47.5581 55.005 48.152 54.7223C48.746 54.4396 49.3451 54.0957 49.9493 53.6905C50.5535 53.2854 51.1286 52.864 51.6746 52.4264C52.2206 51.9887 52.7164 51.5781 53.1621 51.1945C53.621 50.8091 54.0021 50.4949 54.3054 50.2517C54.6087 50.0086 54.8132 49.8799 54.9189 49.8655C55.0775 49.8439 55.2036 49.8806 55.2972 49.9755C55.4023 50.0554 55.4638 50.1614 55.4818 50.2935C55.4962 50.3992 55.3589 50.6265 55.0699 50.9753C54.7942 51.3223 54.4134 51.7374 53.9274 52.2207C53.4397 52.6908 52.8877 53.183 52.2715 53.6975C51.6552 54.2119 51.0089 54.7036 50.3326 55.1724C49.6696 55.6394 49.0164 56.0311 48.3732 56.3473C47.7432 56.6618 47.1639 56.855 46.6355 56.927C45.9485 57.0204 45.3783 56.8356 44.9251 56.3725C44.4718 55.9094 44.1715 55.1362 44.0241 54.0528C43.9252 53.3262 43.9179 52.5804 44.0021 51.8154C44.0996 51.0485 44.2677 50.3058 44.5063 49.587C44.7563 48.8533 45.0501 48.1943 45.3877 47.6101C45.7368 47.0109 46.1219 46.5279 46.5429 46.1611C46.9622 45.7811 47.3898 45.5614 47.8258 45.5021C48.6581 45.3888 49.3435 45.531 49.8821 45.9287C50.4206 46.3264 50.7411 46.9018 50.8436 47.6548ZM45.7821 51.6942C46.1575 51.3875 46.5443 51.0657 46.9425 50.7289C47.3407 50.3922 47.705 50.0533 48.0354 49.7123C48.3658 49.3713 48.6217 49.027 48.8031 48.6793C48.996 48.3167 49.069 47.9636 49.0223 47.6201C48.9558 47.1313 48.6583 46.9228 48.1298 46.9947C47.7995 47.0397 47.4782 47.2987 47.1658 47.7718C46.8648 48.2299 46.5941 48.8117 46.3537 49.5173C46.1133 50.2228 45.9228 50.9485 45.7821 51.6942ZM56.427 55.1302C56.0438 55.1824 55.6707 55.0111 55.3075 54.6165C54.9443 54.2219 54.7159 53.681 54.6225 52.994C54.52 52.241 54.5094 51.4216 54.5907 50.5359C54.6852 49.6484 54.8242 48.7413 55.0076 47.8148C55.1892 46.8751 55.3687 45.9693 55.5461 45.0974C55.5888 44.9166 55.6642 44.7785 55.7723 44.6831C55.8918 44.5726 56.0837 44.4994 56.3479 44.4635C56.8235 44.3987 57.0928 44.5976 57.1557 45.06C57.1701 45.1657 57.1496 45.4107 57.0943 45.795C57.0389 46.1793 56.9622 46.654 56.8642 47.219C56.7794 47.7823 56.6942 48.3927 56.6088 49.0502C56.5215 49.6945 56.455 50.3427 56.4092 50.9949C56.3634 51.647 56.3509 52.2475 56.3718 52.7964C56.5526 52.543 56.7437 52.1671 56.945 51.6688C57.1595 51.1686 57.3857 50.6063 57.6237 49.9818C57.8599 49.3442 58.1092 48.7047 58.3718 48.0634C58.6326 47.409 58.9006 46.8073 59.1758 46.2585C59.4624 45.6947 59.7502 45.2384 60.0391 44.8896C60.3394 44.5258 60.6349 44.3241 60.9256 44.2846C61.3484 44.227 61.7231 44.3106 62.0497 44.5353C62.3877 44.7449 62.68 45.1627 62.9267 45.7885C63.1847 46.3992 63.3929 47.2859 63.5511 48.4486C63.6356 49.0695 63.7741 49.6427 63.9668 50.1682C64.1726 50.6919 64.4367 51.1 64.7591 51.3926C65.0929 51.6701 65.4844 51.7783 65.9336 51.7172C66.6074 51.6255 67.1923 51.4247 67.6884 51.115C68.1827 50.7921 68.6008 50.4526 68.9425 50.0966C69.2957 49.7256 69.5883 49.4032 69.8201 49.1294C70.0502 48.8425 70.2379 48.6891 70.3832 48.6693C70.6871 48.628 70.8606 48.7658 70.9038 49.0829C70.9217 49.215 70.8514 49.4399 70.6928 49.7575C70.5456 50.0601 70.3245 50.4132 70.0296 50.8166C69.746 51.2051 69.4087 51.5941 69.0177 51.9837C68.6381 52.3583 68.2182 52.6846 67.7582 52.9625C67.3113 53.2386 66.8435 53.4099 66.3546 53.4764C65.4431 53.6005 64.6723 53.5237 64.0425 53.2461C63.4258 52.9667 62.9231 52.4363 62.5341 51.655C62.1584 50.8718 61.8771 49.7932 61.6901 48.4192C61.5876 47.6662 61.4668 47.1242 61.3276 46.7933C61.1997 46.4473 61.0154 46.2302 60.7747 46.1419C60.6539 46.4409 60.503 46.8651 60.3221 47.4145C60.1394 47.9507 59.9252 48.5518 59.6794 49.2177C59.4468 49.8817 59.1953 50.5551 58.9249 51.2378C58.6659 51.9055 58.394 52.5279 58.1092 53.1049C57.8244 53.6819 57.5394 54.158 57.254 54.5332C56.9669 54.8953 56.6912 55.0943 56.427 55.1302ZM68.0122 47.5589C67.6519 47.581 67.4552 47.3723 67.4223 46.9327C67.4212 46.8252 67.4767 46.6898 67.5891 46.5265C67.6996 46.35 67.8399 46.2434 68.0098 46.2069C68.414 46.1115 68.9079 45.9837 69.4917 45.8235C70.0868 45.6484 70.7396 45.4519 71.4501 45.2341C71.4941 44.5687 71.56 43.8668 71.6479 43.1282C71.7358 42.3896 71.8462 41.6681 71.9791 40.9637C72.1102 40.2462 72.2635 39.5929 72.439 39.0038C72.6145 38.4148 72.8194 37.9428 73.0537 37.588C73.1792 37.4229 73.2979 37.3058 73.4096 37.2368C73.5195 37.1546 73.6207 37.1072 73.7132 37.0946C73.8981 37.0694 74.0543 37.1289 74.1815 37.2731C74.322 37.4154 74.4057 37.5857 74.4327 37.7838C74.4471 37.8895 74.4416 37.9979 74.4164 38.109C74.2528 38.8848 74.0929 39.8351 73.9364 40.9598C73.78 42.0845 73.6172 43.311 73.4481 44.6392C74.6366 44.2756 75.8233 43.8989 77.0082 43.5088C78.1931 43.1188 79.2089 42.772 80.0557 42.4684C80.2924 42.3286 80.4866 42.3223 80.6385 42.4496C80.8036 42.5752 80.8961 42.7106 80.9159 42.856C80.941 43.0409 80.9071 43.1868 80.8139 43.2937C80.7341 43.3988 80.6458 43.4915 80.549 43.572L80.5319 43.5945C80.2821 43.7361 79.9028 43.9156 79.3941 44.1328C78.8836 44.3369 78.2957 44.5649 77.6303 44.8169C76.963 45.0557 76.2496 45.3008 75.4899 45.5522C74.7434 45.8019 74.0017 46.0373 73.2648 46.2587C73.1192 47.4627 72.9714 48.7006 72.8215 49.9724C72.6831 51.2292 72.5419 52.4662 72.3981 53.6834C72.3307 54.177 72.2192 54.4949 72.0636 54.6372C71.9231 54.7909 71.7603 54.8803 71.5753 54.9055C71.364 54.9343 71.1682 54.8802 70.9881 54.7432C70.8212 54.6045 70.7573 54.2835 70.7965 53.7803L71.3235 46.8257C70.547 47.0525 69.8585 47.2336 69.258 47.3692C68.6706 47.5029 68.2554 47.5662 68.0122 47.5589Z"
            fill="#0CA4E6"
          />
          <defs>
            <filter
              id="filter0_d_260_85"
              x="9.82812"
              y="14.375"
              width="197.066"
              height="50"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_260_85"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_260_85"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>

      {data.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "35px 0px",
            }}
          >
            <Card {...item} />
          </div>
        );
      })}
    </div>
  );
};

export default Project;