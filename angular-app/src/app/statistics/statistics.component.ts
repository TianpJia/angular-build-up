import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DialogService } from '../dialog.service';

type Filter = {
  <T>(array: T[], f: (item: T) => boolean): T[];
};

let filter: Filter = (array, f) => {
  let reslut: any[] = [];
  array.forEach((e) => {
    if (f(e)) {
      reslut.push(e);
    }
  });
  return reslut;
};

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dialogService: DialogService
  ) {}
  ngOnInit(): void {
    // console.info(this.route.snapshot.paramMap);
  }

  canDeactivate(): Observable<boolean> | boolean {
    return this.dialogService.confirm('Discard changes?');
  }

  goTo(target: string) {
    this.router.navigate([target]);
  }

  filter() {
    console.info(filter([0, 1, 2, 3, 4, 5], (_) => _ > 3));
    console.info(
      filter(
        [
          { name: 1, value: 1 },
          { name: 2, value: 2 },
          { name: 3, value: 3 },
        ],
        (_) => _.value > 1
      )
    );
  }
}
