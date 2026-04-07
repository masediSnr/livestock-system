import React from 'react'

function Table() {

    const cellSizes = [
        { title: 'Animals', gtc: {
        gridTemplateColumns : '90px 100px 80px 70px 50px 60px 80px 90px 1fr',
        display: "grid"} },
        { title: 'Health Events', gtc: ['Animal ID', 'Event Type', 'Date', 'Symptoms', 'Veterinarian'] },
        { title: 'Treatments', gtc: ['Animal ID', 'Treatment Type', 'Medication', 'Dosage', 'Date'] },
        { title: 'Medication Register', gtc: ['Medication Name', 'Batch Number', 'Expiry Date', 'Quantity'] },
        { title: 'Inventory', gtc: ['Item Name', 'Category', 'Quantity', 'Unit Cost'] },
        { title: 'Stock Movement', gtc: ['Item Name', 'Movement Type', 'Quantity', 'Date'] },
        { title: 'Animal Movement', gtc: ['Animal ID', 'From Location', 'To Location', 'Date'] },
        { title: 'Clients', gtc: ['Full Name', 'Phone', 'Email', 'Address'] },
        { title: 'Sales', gtc: ['Client', 'Animal/Product', 'Amount', 'Date'] },
        { title: 'Tasks', gtc: ['Task Name', 'Assigned To', 'Priority', 'Due Date'] },
        { title: 'Staff', gtc: ['Full Name', 'Role', 'Phone', 'Email'] },
        { title: 'Farm Locations', gtc: ['Location Name', 'Section', 'Capacity', 'Notes'] },
    ]
    let data = [
        {
            animal_id: "Acm-26-1",
            tag_number: "qrd-dnknd-d",
            species: "cattle",
            breed: "crostyle",
            age: 20,
            weight: "106 kg",
            camp: "benoni",
            createdAt: "2026-05-16"
        },
        {
            animal_id: "Acm-26-1",
            tag_number: "qrd-dnknd-d",
            species: "cattle",
            breed: "crostyle",
            age: 20,
            weight: "106 kg",
            camp: "benoni",
            createdAt: "2026-05-16"
        },
        {
            animal_id: "Acm-26-1",
            tag_number: "qrd-dnknd-d",
            species: "Dragon",
            breed: "crostyle",
            age: 20,
            weight: "106 kg",
            camp: "benoni",
            createdAt: "2026-05-16"
        },
    ]

    return (
        <div className='data-table'>
            <div className="t-header">
                <div style={cellSizes.at(0).gtc} className="row">
                    {Object.keys(data[0]).map((dataKeys,i)=>(
                        <div className="td th">{dataKeys.charAt(0).toUpperCase()+dataKeys.substring(1).replace("_"," ")}</div>
                    ))}
                    <div className="td th">Action</div>
                </div>
            </div>
            <div className="t-body">
                {data.map((eaObject, index)=>(
                   <div style={cellSizes.at(0).gtc} className="row">
                        {Object.keys(eaObject).map((key)=>(
                            <div className="td">{eaObject[key]}</div>
                        ))}
                        <div className="td">
                            <button>view</button>
                            <button>edit</button>
                        </div>
                   </div>
                ))
                }
            </div>
        </div>
    )
}

export default Table
