import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import AccessTimeIcon from 'material-ui-icons/AccessTime';
import SendIcon from 'material-ui-icons/Send';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import StarBorder from 'material-ui-icons/StarBorder';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        background: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
});

class NestedList extends React.Component {
    state = {
        open: true,
        open2: true,
    };

    handleClick = (event) => {
        // debugger;
        this.setState({ open: !this.state.open });
    };
    handleClick2 = (event) => {
        // debugger;
        this.setState({ open2: !this.state.open2 });
    };

    render() {
        const classes = this.props.classes;
        return (
            <List className={classes.root} subheader={<ListSubheader>模組</ListSubheader>}>
                {/* <ListItem button>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText inset primary="Sent mail" />
                </ListItem> */}
                <ListItem button>
                    <ListItemIcon>
                        <AccessTimeIcon />
                    </ListItemIcon>
                    <ListItemText inset primary="Dashboard" />
                </ListItem>
                <ListItem button onClick={this.handleClick} >
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText inset primary="通用" />
                    {this.state.open ? <ExpandMore /> : <ExpandLess />}
                </ListItem>
                <Collapse in={this.state.open} transitionDuration="auto" unmountOnExit>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText inset primary="最新消息" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText inset primary="服務據點" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText inset primary="聯絡我們" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText inset primary="關於我們" />
                    </ListItem>
                </Collapse>


                <ListItem button onClick={this.handleClick2}>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText inset primary="產品" />
                    {this.state.open2 ? <ExpandMore /> : <ExpandLess />}
                </ListItem>
                <Collapse in={this.state.open2} transitionDuration="auto" unmountOnExit>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText inset primary="產品類別" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText inset primary="產品" />
                    </ListItem>
                </Collapse>
            </List>
        );
    }
}

NestedList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);