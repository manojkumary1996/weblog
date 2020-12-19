import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  linkedin:string="https://www.linkedin.com/in/manojyadav1996";
  github:string="https://github.com/manojkumary1996";
  youtube:string="https://www.youtube.com/channel/UCG5XsUBG8dfC0vjOfjMZ00w";
  facebook:string="https://www.facebook.com/profile.php?id=100004042146483";
  constructor() { }

  ngOnInit(): void {
  }

}
