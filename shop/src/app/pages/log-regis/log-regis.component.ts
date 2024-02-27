import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LOGIN_TYPE, REGISTER_TYPE } from './log-regis.model';

@Component({
  selector: 'app-log-regis',
  templateUrl: './log-regis.component.html',
  styleUrls: ['./log-regis.component.scss']
})
export class LogRegisComponent implements OnInit, OnDestroy {
  public type: string = LOGIN_TYPE
  public LOGIN_TYPE = LOGIN_TYPE
  public REGISTER_TYPE = REGISTER_TYPE
  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
  switchLogRegis() {
    this.type === LOGIN_TYPE ? this.type = REGISTER_TYPE : this.type = LOGIN_TYPE
  }
}
