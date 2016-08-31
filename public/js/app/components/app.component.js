"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var storage_service_1 = require("../services/storage.service");
var AppComponent = (function () {
    function AppComponent(storageService) {
        this.storageService = storageService;
        this.updateid = '';
        this.deleteid = '';
        this.select = '';
        this.insert = '';
        this.update = '';
        this.delete = '';
        this.update_id = '';
        this.delete_id = '';
    }
    AppComponent.prototype.select_func = function () {
        var _this = this;
        this.storageService.select('/api/pages').
            subscribe(function (res) {
            console.log('get - ', res);
            _this.select = JSON.stringify(res);
        });
    };
    ;
    AppComponent.prototype.insert_func = function () {
        var _this = this;
        this.storageService.insert('/api/pages', {
            name: ' header ',
            body: []
        }).
            subscribe(function (res) {
            console.log('post - ', res);
            _this.insert = JSON.stringify(res);
        });
    };
    ;
    AppComponent.prototype.update_func = function () {
        var _this = this;
        this.storageService.update('/api/pages', {
            id: this.update_id,
            name: ' header ',
            body: [{ name: 'test', type: 'String' }]
        }).
            subscribe(function (res) {
            console.log('put- ', res);
            _this.update = JSON.stringify(res);
        });
    };
    ;
    AppComponent.prototype.delete_func = function () {
        var _this = this;
        this.storageService.delete('/api/pages', this.delete_id).
            subscribe(function (res) {
            console.log('delete- ', res);
            _this.delete = JSON.stringify(res);
        });
    };
    ;
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.template.html',
            providers: [storage_service_1.StorageService]
        }), 
        __metadata('design:paramtypes', [storage_service_1.StorageService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBRTFDLGdDQUE2Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBUzNEO0lBV0ksc0JBQW1CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVQxQyxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsY0FBUyxHQUFHLEVBQUUsQ0FBQztJQUU4QixDQUFDO0lBRXJELGtDQUFXLEdBQVg7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBRTtZQUNyQyxTQUFTLENBQUUsVUFBQSxHQUFHO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBRSxRQUFRLEVBQUcsR0FBRyxDQUFFLENBQUM7WUFDOUIsS0FBSSxDQUFDLE1BQU0sR0FBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7SUFFRCxrQ0FBVyxHQUFYO1FBQUEsaUJBU0M7UUFSRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUM7WUFDcEMsSUFBSSxFQUFHLFVBQVU7WUFDakIsSUFBSSxFQUFHLEVBQUU7U0FDWCxDQUFDO1lBQ0MsU0FBUyxDQUFFLFVBQUEsR0FBRztZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUUsU0FBUyxFQUFHLEdBQUcsQ0FBRSxDQUFDO1lBQy9CLEtBQUksQ0FBQyxNQUFNLEdBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7O0lBRUQsa0NBQVcsR0FBWDtRQUFBLGlCQVVDO1FBVEcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFDO1lBQ3BDLEVBQUUsRUFBRyxJQUFJLENBQUMsU0FBUztZQUNuQixJQUFJLEVBQUcsVUFBVTtZQUNqQixJQUFJLEVBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQyxDQUFDO1NBQzNDLENBQUM7WUFDRSxTQUFTLENBQUUsVUFBQSxHQUFHO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBRSxPQUFPLEVBQUcsR0FBRyxDQUFFLENBQUM7WUFDN0IsS0FBSSxDQUFDLE1BQU0sR0FBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7SUFFRCxrQ0FBVyxHQUFYO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNwRCxTQUFTLENBQUUsVUFBQSxHQUFHO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBRSxVQUFVLEVBQUcsR0FBRyxDQUFFLENBQUM7WUFDaEMsS0FBSSxDQUFDLE1BQU0sR0FBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7SUF4REw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxtQkFBbUI7WUFDaEMsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztTQUM5QixDQUFDOztvQkFBQTtJQXFERixtQkFBQztBQUFELENBcERBLEFBb0RDLElBQUE7QUFwRFksb0JBQVksZUFvRHhCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9hcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge1N0b3JhZ2VTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvc3RvcmFnZS5zZXJ2aWNlXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAudGVtcGxhdGUuaHRtbCcsXHJcbiAgICBwcm92aWRlcnM6IFtTdG9yYWdlU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbiAgICBcclxuICAgIHB1YmxpYyB1cGRhdGVpZCA9ICcnO1xyXG4gICAgcHVibGljIGRlbGV0ZWlkID0gJyc7XHJcbiAgICBwdWJsaWMgc2VsZWN0ID0gJyc7XHJcbiAgICBwdWJsaWMgaW5zZXJ0ID0gJyc7XHJcbiAgICBwdWJsaWMgdXBkYXRlID0gJyc7XHJcbiAgICBwdWJsaWMgZGVsZXRlID0gJyc7XHJcbiAgICBwdWJsaWMgdXBkYXRlX2lkID0gJyc7XHJcbiAgICBwdWJsaWMgZGVsZXRlX2lkID0gJyc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIHN0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZSkge31cclxuXHJcbiAgICBzZWxlY3RfZnVuYygpIHtcclxuICAgICAgICB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnNlbGVjdCgnL2FwaS9wYWdlcycgKS5cclxuICAgICAgICAgICAgc3Vic2NyaWJlKCByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coICdnZXQgLSAnICwgcmVzICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdCA9ICBKU09OLnN0cmluZ2lmeShyZXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgaW5zZXJ0X2Z1bmMoKSB7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlU2VydmljZS5pbnNlcnQoJy9hcGkvcGFnZXMnLHtcclxuICAgICAgICAgICAgbmFtZSA6ICcgaGVhZGVyICcsXHJcbiAgICAgICAgICAgIGJvZHkgOiBbXVxyXG4gICAgICAgICB9KS5cclxuICAgICAgICAgICAgc3Vic2NyaWJlKCByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coICdwb3N0IC0gJyAsIHJlcyApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnNlcnQgPSAgSlNPTi5zdHJpbmdpZnkocmVzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHVwZGF0ZV9mdW5jKCkge1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZVNlcnZpY2UudXBkYXRlKCcvYXBpL3BhZ2VzJyx7XHJcbiAgICAgICAgICAgIGlkIDogdGhpcy51cGRhdGVfaWQsXHJcbiAgICAgICAgICAgIG5hbWUgOiAnIGhlYWRlciAnLFxyXG4gICAgICAgICAgICBib2R5IDogW3sgbmFtZTogJ3Rlc3QnLCB0eXBlOiAnU3RyaW5nJ31dXHJcbiAgICAgICAgfSkuXHJcbiAgICAgICAgICAgIHN1YnNjcmliZSggcmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCAncHV0LSAnICwgcmVzICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSA9ICBKU09OLnN0cmluZ2lmeShyZXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgZGVsZXRlX2Z1bmMoKSB7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlU2VydmljZS5kZWxldGUoJy9hcGkvcGFnZXMnLCB0aGlzLmRlbGV0ZV9pZCkuXHJcbiAgICAgICAgICAgIHN1YnNjcmliZSggcmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCAnZGVsZXRlLSAnICwgcmVzICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZSA9ICBKU09OLnN0cmluZ2lmeShyZXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
