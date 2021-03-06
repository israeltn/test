
import { Component, OnInit, ViewChild} from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { companyUrl } from '../company-url';
import swal from 'sweetalert2';
import { GenericService } from 'src/app/services/generic.service';
@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {
    
	displayedColumns: string[] = ['UnitName','UnitCode','DepartmentID','StatusID'];
	data = [];
    obj={ UnitName : null,UnitCode : null,DepartmentID : null,StatusID : null };
    displayForm = false;
    operation = "Add";
	title="Units";
  parent="Company";
  Department = [];
  Status = [];
	
  constructor(protected http: HttpService, protected generics: GenericService) {
		this.loadItem = this.loadItem.bind(this);
	}
  
    ngOnInit() {
      this.generics.getStatus()
        .subscribe(res => {
		  this.Status = res;
        }, err =>
        { console.log(err) });
      this.http.get(companyUrl.units.list)
        .subscribe(res => {
		  this.data = res.data;
        }, err =>
        { console.log(err) });

        this.http.get(companyUrl.departments.list)
        .subscribe(res => {
		  this.Department = res.data;
        }, err =>
        { console.log(err) });
		
    }
	
    showForm()
    {
      this.displayForm = true;
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
  
    hideForm(){this.displayForm = false;}

    addItem() {
      this.resetForm();
      this.showForm();
    }
  
    processForm()
    {
      let url = companyUrl.units.add;
      if(this.operation=="Update")
        url = companyUrl.units.update;
      this.save(url);
    }
  
    save(url)
    {
      this.http.post(url,this.obj)
        .subscribe(res => {
          this.data= res.data;
          swal.fire("Process Complete", res.message,'success');
          this.resetForm();
        }, err =>
        {
          console.log(err);
          swal.fire("Process Unsuccessful", err.error.message,'error');
        });

    }
  
    loadItem(id)
    {
      this.obj = this.data.find(item => item.id === id.row.data.id);
      this.operation ="Update";
      this.showForm();
    }
  
    resetForm()
    {
      this.obj = { UnitName : null,UnitCode : null,DepartmentID : null,StatusID : null };
      this.hideForm();
      this.operation="Add";
    }
  }
