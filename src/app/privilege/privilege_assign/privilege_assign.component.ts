import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { privilegeUrl } from '../privilege-url';
import swal from 'sweetalert2';
@Component({
    selector: 'app-privilege_assign',
    templateUrl: './privilege_assign.component.html',
    styleUrls: ['./privilege_assign.component.scss'],
})
export class Privilege_assignComponent implements OnInit {
    displayedColumns: string[] = [
        'user_id',
        'pid',
        'is_active',
        'date_assigned',
    ];
    data = [];
    obj = { user_id: null, pid: null, is_active: null, date_assigned: null };
    displayForm = false;
    operation = 'Add';
    title = 'Privilege_assign';
    parent = 'privilege';

    constructor(protected http: HttpService) {
        this.loadItem = this.loadItem.bind(this);
    }

    ngOnInit() {
        this.http.get(privilegeUrl.privilege_assign.list).subscribe(
            (res) => {
                this.data = res.data;
            },
            (err) => {
                console.log(err);
            }
        );
    }

    showForm() {
        this.displayForm = true;
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    hideForm() {
        this.displayForm = false;
    }

    addItem() {
        this.resetForm();
        this.showForm();
    }

    processForm() {
        let url = privilegeUrl.privilege_assign.add;
        if (this.operation == 'Update')
            url = privilegeUrl.privilege_assign.update;
        this.save(url);
    }

    save(url) {
        this.http.post(url, this.obj).subscribe(
            (res) => {
                this.data = res.data;
                swal.fire('Process Complete', res.message, 'success');
                this.resetForm();
            },
            (err) => {
                console.log(err);
                swal.fire('Process Unsuccessful', err.error.message, 'error');
            }
        );
    }

    loadItem(id) {
        this.obj = this.data.find((item) => item.id === id.row.data.id);
        this.operation = 'Update';
        this.showForm();
    }

    resetForm() {
        this.obj = {
            user_id: null,
            pid: null,
            is_active: null,
            date_assigned: null,
        };
        this.hideForm();
        this.operation = 'Add';
    }
}