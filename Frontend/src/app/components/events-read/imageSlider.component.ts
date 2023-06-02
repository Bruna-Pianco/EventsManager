import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { EventsService } from '../../services/events.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {EventCreateComponent } from '../event-create/event-create.component'
import { SlideInterface } from '../../models/slide'

 

@Component({
  selector: 'app-events-read',
  templateUrl: './events-read.component.html',
  styleUrls: ['./events-read.component.css']
})
  export class imageSlider implements OnInit, OnDestroy {
    @Input() slides: SlideInterface[] = [];
  
    currentIndex: number = 0;
    timeoutId?: number;
  
    ngOnInit(): void {
      this.resetTimer();
    }
    ngOnDestroy() {
      window.clearTimeout(this.timeoutId);
    }
    resetTimer() {
      if (this.timeoutId) {
        window.clearTimeout(this.timeoutId);
      }
      this.timeoutId = window.setTimeout(() => this.goToNext(), 3000);
    }
  
    goToPrevious(): void {
      const isFirstSlide = this.currentIndex === 0;
      const newIndex = isFirstSlide
        ? this.slides.length - 1
        : this.currentIndex - 1;
  
      this.resetTimer();
      this.currentIndex = newIndex;
    }
  
    goToNext(): void {
      const isLastSlide = this.currentIndex === this.slides.length - 1;
      const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
  
      this.resetTimer();
      this.currentIndex = newIndex;
    }
  
    goToSlide(slideIndex: number): void {
      this.resetTimer();
      this.currentIndex = slideIndex;
    }
  
    getCurrentSlideUrl() {
      return `url('${this.slides[this.currentIndex].url}')`;
    }
  }