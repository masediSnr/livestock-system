import React from 'react'

function FormDropDown({fieldTitle, fieldKey}) {
    const dropDowns = [
        {title: "status",values: ["Healthy", "Quarantine", "Sold", "Withdrawal"]},
        {title: "species",values: ["Cattle","Poultry", "Sheep"]},
        {title: "animalid",values: ["ACM-26-1","ACM-26-2","ACM-26-3","ACM-26-4","ACM-26-5","ACM-26-6","ACM-26-201"]},
        {title: "location",values: ["Doornfontein","Orange-Farm","Benoni","Brakpan","Kingsway","Germiston"]},
        {title: "medication",values: ["Panado","Ino","Tumeri","Condesse"]},
        {title: "category",values: ["Feed","Medication","Livestock"]},
        {title: "role",values: ["Admin","Manager","Worker","Vet"]},
        {title: "vet",values: ["Terrence","Masedi","Noks","Mokgope"]},
    ]

    return (
        <div className='field-drop-down'>
            {dropDowns.map((field, index)=>(
                field.title == fieldTitle.replace(" ","") && (
                    <div key={index} className="form-field">
                        <label htmlFor={field.title}>{fieldTitle}</label>
                        <select name={field.title} id={field.title}>
                            {field.values.map((value, ind)=>(
                                <option key={ind} value={value}>{value}</option>
                                ))}
                        </select>
                    </div>
                )
            ))}
        </div>
    )

}
export default FormDropDown
