import '../Pages Css/Dashboard.css';
const Dashboard = ()=>{
    return <>
        <div className="container fixedCenter">
            <div>
                <div className="title">Welcome Admin</div>
                <div className="title">Officer Pratham</div>
            </div>
            <a href="./feedback" className="button">Feedback Report</a>
            <a href="./qr" className="button">Generate QR code of Station</a>
            <a href="./station" className="button">Station Report</a>
            <a href="./officer" className="button">Officer Report</a>
        </div>
    </>
};

export default Dashboard;