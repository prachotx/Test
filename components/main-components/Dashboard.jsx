// Components
import List from '../sub-components/List';
// ICON
import { FaCheck } from "react-icons/fa";

function Dashboard() {

    const student = [
        {
            name: "Prachot",
            ns_number: 6640202674
        },
        {
            name: "Nawin",
            ns_number: 6640202621
        },
        {
            name: "Yoda",
            ns_number: 6640201231
        }
    ]

    return (
        <div className='w-full bg-base-100'>
            <div>
                {/* Navbar */}
                <div className="navbar bg-base-200">
                    <div className="flex-1">
                        <a className="btn btn-ghost text-xl">Dashboard</a>
                    </div>
                </div>
                {/* Dashboard */}
                <div className='p-[20px]'>
                    <div className='grid grid-cols-4 gap-4'>

                        <div className="stat bg-base-300 rounded">
                            <div className="stat-figure text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                            </div>
                            <div className="stat-title">All Students</div>
                            <div className="stat-value">200</div>
                            <div className="stat-desc"></div>
                        </div>
                        
                        <div className="stat bg-base-300 rounded">
                            <div className="stat-figure text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                            </div>
                            <div className="stat-title">Checked</div>
                            <div className="stat-value">100</div>
                            <div className="stat-desc"></div>
                        </div>

                        <div className="stat bg-base-300 rounded">
                            <div className="stat-figure text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                            </div>
                            <div className="stat-title">Not Checked</div>
                            <div className="stat-value">100</div>
                            <div className="stat-desc"></div>
                        </div>

                        <div className="stat bg-base-300 rounded">
                            <div className="stat-figure text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                            </div>
                            <div className="stat-title mb-[10px]">Download to PDF</div>
                            <button className="btn btn-info">Download</button>
                        </div>

                    </div>
                </div>
                {/* List Student */}
                <div className='p-[20px] pt-0'>
                    <div className="overflow-x-auto">
                        <table className='table table-fixed'>
                            <thead>
                                <tr className='text-center'>
                                    <th>ID</th>
                                    <th>Nisit Number</th>
                                    <th>Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {student.map((s, i) => (
                                    <List key={i} id={i + 1} ns_number={s.ns_number} name={s.name} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard