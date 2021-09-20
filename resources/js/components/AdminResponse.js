
import AdminFormCancelElement from "./AdminFormCancelElement";
import AdminFormCreateElement from "./AdminFormCreateElement";
import AdminFormDescriptionElement from "./AdminFormDescriptionElement";
import AdminFormItemElement from "./AdminFormItemElement";
import AdminFormTitleElement from "./AdminFormTitleElement";
function AdminResponse() {
  return (
    <div className="AdminResponse">
      
      <AdminFormTitleElement/>
      <AdminFormDescriptionElement/>
      <AdminFormItemElement/>
      <AdminFormCreateElement/>
      <AdminFormCancelElement/>
    </div>
  );
}

export default AdminResponse;
