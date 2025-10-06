import { Component } from '@angular/core';
import { MovieVar } from '../models/movieVar';

@Component({
  selector: 'app-home-component',
  imports: [],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss'
})
export class HomeComponent {

  recommendedMovies: MovieVar[] = [{
    id:1,
    title:'Kantara',
    year:'2025',
    imageUrl:'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kantara-a-legend-chapter-1-et00377351-1701090949.jpg'
  },{
    id:2,
    title:'They Call Him OG',
    year:'2025',
    imageUrl:'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/they-call-him-og-et00369074-1758290791.jpg'
  },{
    id:3,
    title:'Jolly LLB 3',
    year:'2025',
    imageUrl:'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICA0NC43SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00450799-rwxwjqxupb-portrait.jpg'
  },{
    id:4,
    title:'Sunny sanskari ki Tulsi kumari',
    year:'2025',
    imageUrl:'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sunny-sanskari-ki-tulsi-kumari-et00388406-1759230485.jpg'
  },{
    id:5,
    title:'Shin chan',
    year:'2025',
    imageUrl:'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC42LzEwICAyLjNLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00447683-tjllbrmtmb-portrait.jpg'
  },{
    id:6,
    title:'Chainsaw Man',
    year:'2025',
    imageUrl:'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4yLzEwICA2LjdLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00448819-kekpkybkvh-portrait.jpg'
  },{
    id:7,
    title:'Homebound',
    year:'2025',
    imageUrl:'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS8xMCAgMS44SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00462810-flzlucecrx-portrait.jpg'
  },{
    id:8,
    title:'Mirai',
    year:'2025',
    imageUrl:'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC45LzEwICAxMTMuNksgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00395402-wehawurecb-portrait.jpg'
  },{
    id:9,
    title:'One Battle After Another',
    year:'2025',
    imageUrl:'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICA1LjJLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00439854-kalhwrpbux-portrait.jpg'
  },{
    id:10,
    title:'The movie',
    year:'2025',
    imageUrl:'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS41LzEwICAxNjEuN0sgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00403839-meqkmzsbnv-portrait.jpg'
  },{
    id:11,
    title:'Kushi',
    year:'2025',
    imageUrl:'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4xLzEwICAxLjZLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00463190-rdewusrqpc-portrait.jpg'
  },{
    id:4,
    title:'Sunny sanskari ki Tulsi kumari',
    year:'2025',
    imageUrl:'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sunny-sanskari-ki-tulsi-kumari-et00388406-1759230485.jpg'
  }
]
}
