
// import React from 'react';
// import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
// import InboxIcon from 'material-ui-icons/MoveToInbox';
// import DraftsIcon from 'material-ui-icons/Drafts';
// import StarIcon from 'material-ui-icons/Star';
// import SendIcon from 'material-ui-icons/Send';
// import MailIcon from 'material-ui-icons/Mail';
// import DeleteIcon from 'material-ui-icons/Delete';
// import ReportIcon from 'material-ui-icons/Report';

// import Collapse from 'material-ui/transitions/Collapse';
// import StarBorder from 'material-ui-icons/StarBorder';

// const styles = theme => ({
//     root: {
//         width: '100%',
//         maxWidth: 360,
//         background: theme.palette.background.paper,
//     },
//     nested: {
//         paddingLeft: theme.spacing.unit * 4,
//     },
// });


// export const mailFolderListItems = (
//     <div>
//         <ListItem button>
//             <ListItemIcon>
//                 <InboxIcon />
//             </ListItemIcon>
//             <ListItemText primary="Inbox" />
//         </ListItem>
//         <ListItem button>
//             <ListItemIcon>
//                 <StarIcon />
//             </ListItemIcon>
//             <ListItemText primary="Starred" />
//         </ListItem>
//         <ListItem button>
//             <ListItemIcon>
//                 <SendIcon />
//             </ListItemIcon>
//             <ListItemText primary="Send mail" />
//         </ListItem>
//         <ListItem button>
//             <ListItemIcon>
//                 <DraftsIcon />
//             </ListItemIcon>
//             <ListItemText primary="Drafts" />
//         </ListItem>
//     </div>
// );

// export const otherMailFolderListItems = (
//     <div>
//         <ListItem button>
//             <ListItemIcon>
//                 <MailIcon />
//             </ListItemIcon>
//             <ListItemText primary="All mail" />
//         </ListItem>
//         <ListItem button>
//             <ListItemIcon>
//                 <DeleteIcon />
//             </ListItemIcon>
//             <ListItemText primary="Trash" />
//         </ListItem>
//         <ListItem button>
//             <ListItemIcon>
//                 <ReportIcon />
//             </ListItemIcon>
//             <ListItemText primary="Spam" />
//         </ListItem>
//         <Collapse in={this.state.open} transitionDuration="auto" unmountOnExit>
//             <ListItem button>
//                 <ListItemIcon>
//                     <StarBorder />
//                 </ListItemIcon>
//                 <ListItemText inset primary="Starred" />
//             </ListItem>
//         </Collapse>
//     </div>