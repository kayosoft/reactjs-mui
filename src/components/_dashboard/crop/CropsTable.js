import MUIDataTable from "mui-datatables";

const columns = ["Name", "Company", "City", "State"];

const data = [
 ["Joe James", "Test Corp", "Yonkers", "NY"],
 ["John Walsh", "Test Corp", "Hartford", "CT"],
 ["Bob Herm", "Test Corp", "Tampa", "FL"],
 ["James Houston", "Test Corp", "Dallas", "TX"],
];
export default function CropsTable(){


const options = {
  filterType: 'checkbox',
};
return (
    
<MUIDataTable
  title={"Employee List"}
  data={data}
  columns={columns}
  options={options}
/>
);
}