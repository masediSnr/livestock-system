import React from 'react'
import FormDropDown from './FormDropDown';

function Forms({formTitle}) {
    const forms = [
        { title: 'Animals', fields: ['Animal ID', 'Tag Number', 'Species', 'Breed', 'Age', 'Weight', 'Location'] },
        { title: 'Health Events', fields: ['Animal ID', 'Event Type', 'Date', 'Symptoms', 'Veterinarian'] },
        { title: 'Treatments', fields: ['Animal ID', 'Treatment Type', 'Medication', 'Dosage', 'Date'] },
        { title: 'Medication Register', fields: ['Medication Name', 'Batch Number', 'Expiry Date', 'Quantity'] },
        { title: 'Inventory', fields: ['Item Name', 'Category', 'Quantity', 'Unit Cost'] },
        { title: 'Stock Movement', fields: ['Item Name', 'Movement Type', 'Quantity', 'Date'] },
        { title: 'Animal Movement', fields: ['Animal ID', 'From Location', 'To Location', 'Date'] },
        { title: 'Clients', fields: ['Full Name', 'Phone', 'Email', 'Address'] },
        { title: 'Sales', fields: ['Client', 'Animal/Product', 'Amount', 'Date'] },
        { title: 'Tasks', fields: ['Task Name', 'Assigned To', 'Priority', 'Due Date'] },
        { title: 'Staff', fields: ['Full Name', 'Role', 'Phone', 'Email'] },
        { title: 'Farm Locations', fields: ['Location Name', 'Section', 'Capacity', 'Notes'] },
    ];
    const DROP_DOWNS = [
        "status",
        "species",
        "animalid",
        "location",
        "medication"
    ]

    return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Ntinga Agri-Manage {formTitle}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {forms.map((form, index) => (
            form.title == formTitle && (
            <div key={index} className="form bg-white rounded-2xl shadow p-5">
                <h3 className="text-xl font-semibold mb-4">{form.title}</h3>
                <form className="space-y-3">
                {form.fields.map((field, i) => (
                    <div>
                        {(formTitle !="Animals" ||
                         field !="Animal ID" &&  formTitle =="Animals" ) && 
                            <FormDropDown key={i} fieldTitle={field.toLowerCase()}/>
                        }{!DROP_DOWNS.includes(field.replace(" ","").toLowerCase()) &&
                            
                            <div key={index} className="form-field">
                                <label htmlFor={field.split(" ").at(0)}>{field}</label>
                                <input
                                id={field.split(" ").at(0)}
                                key={i}
                                type={field=="Date"? 'date': 'text'}
                                placeholder={field}
                                className="w-full border rounded-xl p-2"
                                />
                            </div>
                        }
                    </div>
                    
                ))}
                <button
                    type="submit"
                    className="w-full rounded-xl p-2 bg-black text-white"
                >
                    Save {form.title.endsWith("s")? form.title.substring(0,form.title.length -1) : form.title}
                </button>
                </form>
            </div>
            )
        ))}
      </div>
    </div>
  );
}

export default Forms
