import React, {Component} from 'react';
import { connect } from 'react-redux';

//components
import AddNewContact from '../AddNewContact/AddNewContact';
import NameAndDate from '../CreateNewAuction/NameAndDate';
import ViewAuctions from '../ViewAuctions/ViewAuctions';
import BeneficiaryHeader from '../BeneficiaryHeader/BeneficiaryHeader';



//material-ui
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";

//defines height for grid components
const gridBox = {
    height: "450px"
}

class AdminHome extends Component {

  handleUnselectAuction = () => {
    this.props.dispatch({
      type: "UNSELECT_AUCTION"
    })
  }

  componentDidMount() {
    //get the user's auctions
    this.props.dispatch({
      type: "GET_ADMIN_AUCTIONS",
      payload: this.props.reduxState.user.id
    });
    //get the user's contacts
    this.props.dispatch({
      type: "GET_CONTACTS",
      payload: this.props.reduxState.user.id
    })
  }

  render() {
    //calculate the total of selected auction's bids
             let totalBids = 0;
             this.props.reduxState.setAuctionItemsReducer.forEach(item => {
               totalBids = totalBids + Number(item.currentBid);
             })

             return (
               <div className="adminHomeContainerDiv">
                 <h1>
                   Welcome back, {this.props.user.firstname}.{" "}
                 </h1>
                 <Grid container spacing={2}>
                   {/* left box: view past auctions */}
                   <Grid item sm={4}>
                     <Paper style={gridBox}>
                       <center>
                         <h3>View Auctions</h3>
                       </center>
                       <ViewAuctions />
                     </Paper>
                   </Grid>

                   {/* middle box: create a new auction */}
                   {/* conditionally renders auction detail or create new if setSelectedAuctionReducer is empty */}
                   {this.props.reduxState.setSelectedAuctionReducer
                     .id ? (
                     <Grid item sm={4}>
                       <Paper style={gridBox}>
                         <center>
                           <h3>
                             {
                               this.props.reduxState
                                 .setSelectedAuctionReducer
                                 .auction_name
                             }
                           </h3>
                           <BeneficiaryHeader />
                           <h4>Total raised: ${totalBids}</h4>
                         </center>
                         {/* link switches box to create new auction */}
                         <center>
                           <Link
                             onClick={this.handleUnselectAuction}
                           >
                             Create a new auction
                           </Link>
                         </center>
                       </Paper>
                     </Grid>
                   ) : (
                     <Grid item sm={4}>
                       <Paper style={gridBox}>
                         <center>
                           <NameAndDate />
                         </center>
                       </Paper>
                     </Grid>
                   )}

                   {/* third box: add new contact  */}
                   <Grid item sm={4}>
                     <Paper style={gridBox}>
                       <center>
                         <AddNewContact />
                       </center>
                     </Paper>
                   </Grid>
                 </Grid>
               </div>
             );
           }
}


const mapReduxStateToProps = reduxState => ({
  user: reduxState.user,
  reduxState,
});


export default connect(mapReduxStateToProps)(AdminHome);