import {Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material";
import {Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SnackBarErrorService {

  private blockShowSnackBarError: boolean = false;

  private matSnackBarSubscribe:Subscription;

  constructor(private matSnackBar:MatSnackBar) {}

  public openSnackBarError(error:string): void {
    if (this.blockShowSnackBarError) {
      return;
    }

    this.blockShowSnackBarError = true;
    let matSnackBarRef = this.matSnackBar.open(
      error,
      'Close',
      {
        duration: 3000
      }
    );

    this.matSnackBarSubscribe = matSnackBarRef.afterDismissed().subscribe(() => {
      this.blockShowSnackBarError = false;
      this.matSnackBarSubscribe.unsubscribe();
    });
  }
}
