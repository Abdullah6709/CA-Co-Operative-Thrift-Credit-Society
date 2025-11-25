import React from "react";

const ExpPdf = () => {
  // Initial state with all the data
  const reportData = {
    societyInfo: {
      name: "C.A. CO-OPERATIVE THRIFT & CREDIT SOCIETY LTD.",
      address: "D-251/10, 2nd Floor, Laxmi Nagar, Delhi- 110 092",
      phone: "Ph.: 43710659",
    },
    reportInfo: {
      title: "Surety Given and Taken Report",
      date: "As on 24-Nov-2025",
    },
    memberInfo: {
      accountNo: "6233",
      name: "RAJENDRA",
      address:
        "H.NO.559, DWARKA SECTOR-16 B, VILLAGE KAKROLA NEAR SHIV MANDIR DELHI",
      mobileNo: "8627062725",
    },
    suretyGiven: [
      {
        actType: "RL",
        accountNo: "6101",
        file: "1",
        acName: "SANJAY S/o. SHRISHWAF 7678639707",
        principal: "300000",
        loanDate: "07/09/2023",
        prd: "36",
        rate: "18.00",
        balance: "415,088",
        loanStatus: "Overdue",
      },
      {
        actType: "RL",
        accountNo: "6182",
        file: "1",
        acName: "MUKESH KUMAR UPRETI 9810827951",
        principal: "300000",
        loanDate: "12/09/2023",
        prd: "36",
        rate: "18.00",
        balance: "452,202",
        loanStatus: "Overdue",
      },
      {
        actType: "RL",
        accountNo: "6183",
        file: "1",
        acName: "SAMSHER SINGH S/o. SHI 8826116166",
        principal: "350000",
        loanDate: "07/09/2023",
        prd: "36",
        rate: "18.00",
        balance: "491,778",
        loanStatus: "Overdue",
      },
    ],
    suretyTaken: [
      {
        accountNo: "6101",
        acName: "SANJAY S/o. SHRISHWAR SINGH 7678639707",
        mobileNo:
          "F-44, ARUNA NAGAR, MAJNU KATILA, CIVIL LINES, NORTH DELHI DELHI",
        surety: "300,000",
        loanDetails: "RL - 6233 - 1",
        amt: "483688",
        balance: "",
        remarks: "",
      },
      {
        accountNo: "6182",
        acName: "MUKESH KUMAR UPRETI S/o. SHI 9810827951",
        mobileNo:
          "F-137/8,Jawahara Park DEVLI ROAD KHANPUR (NEAR MOHALLA CLINIC) DELHI 110062",
        surety: "300,000",
        loanDetails: "RL - 6233 - 1",
        amt: "483688",
        balance: "",
        remarks: "",
      },
      {
        accountNo: "6183",
        acName: "SAMSHER SINGH S/o. SHRI BADL 8826116166",
        mobileNo:
          "FLAT NO-7, KALKA APPARTMENT, VILLAGE CHHAWLA, NANAK HERI SOUTH WEST DELHI DELHI 110071",
        surety: "300,000",
        loanDetails: "RL - 6233 - 1",
        amt: "483688",
        balance: "",
        remarks: "",
      },
      {
        accountNo: "6273",
        acName: "NEERAJ KUMAR S/o. SHRI ASHO# 9015971739",
        mobileNo:
          "H.NO.-9353/64 GALI DOR WALI, TOKRI WALAN, AZAD MARKET DELHI 110006",
        surety: "300,000",
        loanDetails: "RL - 6233 - 1",
        amt: "483688",
        balance: "",
        remarks: "",
      },
    ],
    pageInfo: {
      date: "Monday, 24 November, 2025",
      page: "Page 1 of 1",
    },
  };

  const handleDownloadPdf = () => {
    const printWindow = window.open("", "_blank");

    // Generate table rows for Surety Given
    const suretyGivenRows = reportData.suretyGiven
      .map(
        (item) => `
      <tr>
        <td>${item.actType}</td>
        <td>${item.accountNo}</td>
        <td>${item.file}</td>
        <td>${item.acName}</td>
        <td>${item.principal}</td>
        <td>${item.loanDate}</td>
        <td>${item.prd}</td>
        <td>${item.rate}</td>
        <td>${item.balance}</td>
        <td>${item.loanStatus}</td>
      </tr>
    `
      )
      .join("");

    // Generate table rows for Surety Taken
    const suretyTakenRows = reportData.suretyTaken
      .map(
        (item) => `
      <tr>
        <td>${item.accountNo}</td>
        <td>${item.acName}</td>
        <td>${item.mobileNo}</td>
        <td>${item.surety}</td>
        <td>${item.amt}</td>
        <td>${item.loanDetails}</td>
        <td>${item.balance}</td>
        <td>${item.remarks}</td>
      </tr>
    `
      )
      .join("");

    const pdfContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>SURETY GIVEN AND TAKEN</title>
        <style>
          body { 
            font-family: Arial, sans-serif; 
            margin: 0;
            padding: 20px;
            font-size: 15px;
          }
          .header {
            text-align: center;
            margin-bottom: 20px;
          }
          .society-info {
            font-weight: bold;
            margin-bottom: 10px;
          }
          .member-info {
            margin-bottom: 20px;
            line-height: 1.4;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
            font-size: 15px;
          }
          th, td {
            border: 1px solid #000;
            padding: 4px;
            text-align: left;
          }
          th {
            background-color: #f0f0f0;
            font-weight: bold;
          }
          .section-title {
            font-weight: bold;
            margin: 15px 0 10px 0;
            background-color: #e0e0e0;
            padding: 5px;
          }
          .page-info {
            text-align: center;
            margin-top: 20px;
            font-style: italic;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="society-info">
            ${reportData.societyInfo.name}<br>
            ${reportData.societyInfo.address}<br>
            ${reportData.societyInfo.phone}
          </div>
          <div style="font-weight: bold; margin: 10px 0;">
            ${reportData.reportInfo.title} ${reportData.reportInfo.date}
          </div>
        </div>

        <div class="member-info">
          <strong>A/c.No. :</strong> ${reportData.memberInfo.accountNo}<br>
          <strong>A/c.Name :</strong> ${reportData.memberInfo.name}<br>
          <strong>Address :</strong> ${reportData.memberInfo.address}<br>
          <strong>Mobile No. :</strong> ${reportData.memberInfo.mobileNo}
        </div>

        <div class="section-title">MEMBER GIVEN THE SURETY FOR THE FOLLOWING ACCOUNTS</div>
        <table>
          <thead>
            <tr>
              <th>ActType</th>
              <th>A/c.No.</th>
              <th>File</th>
              <th>AcName</th>
              <th>Principal</th>
              <th>Loan Date</th>
              <th>PRD</th>
              <th>Rate</th>
              <th>Balance</th>
              <th>Loan Status</th>
            </tr>
          </thead>
          <tbody>
            ${suretyGivenRows}
          </tbody>
        </table>

        <div class="section-title">MEMBER TAKEN THE SURETY FROM THE FOLLOWING ACCOUNTS</div>
        <table>
          <thead>
            <tr>
              <th>A/c.No.</th>
              <th>A/c.Name</th>
              <th>Address</th>
              <th>Surety</th>
              <th>Amt</th>
              <th>Loan Details</th>
              <th>Balance</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            ${suretyTakenRows}
          </tbody>
        </table>

        <div class="page-info">
          ${reportData.pageInfo.date} ${reportData.pageInfo.page}
        </div>

        <script>
          window.onload = function() {
            setTimeout(function() {
              window.print();
            }, 500);
          };
        </script>
      </body>
      </html>
    `;

    printWindow.document.write(pdfContent);
    printWindow.document.close();
  };

  return (
    <div>
      <button
        onClick={handleDownloadPdf}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        Download PDF
      </button>
    </div>
  );
};          

export default ExpPdf;
