import '../Pages Css/Dashboard.css';
const Dashboard = ()=>{
    return <>
        <div className="container fixedCenter">
            <div>
                <div className="title">Welcome Admin</div>
                <div className="title">Officer Pratham</div>
            </div>
            <a href="./dashboard/feedback" className="button">Feedback Report</a>
            <a href="./dashboard/qr" className="button">Generate QR code of Station</a>
            <a href="./dashboard/station" className="button">Station Report</a>
            <a href="./dashboard/officer" className="button">Officer Report</a>
            <a href="./dashboard/questions" className="button">Questions Modification</a>
        </div>
    </>
};

export default Dashboard;