import React from "react";
import PropTypes from "prop-types";
// Material-ui
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { withStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import Dialog from "@mui/material/Dialog";
import MuiDialogTitle from "@mui/material/DialogTitle";
import MuiDialogContent from "@mui/material/DialogContent";
import CloseIcon from "@mui/icons-material/Close";

// Components
import AddCrop from "./AddcropForm";
import CropsTable from "./CropsTable";

const styles = (theme) => ({
  paper: {
    maxWidth: 936,
    margin: "auto",
    overflow: "hidden",
    marginTop: theme.spacing(3),
  },
  searchBar: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: "block",
  },
  addCrop: {
    marginRight: theme.spacing(1),
  },
  contentWrapper: {
    margin: "40px 16px",
  },
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    width: theme.spacing(70),
  },
}))(MuiDialogContent);


function Content(props) {
  const { classes } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Paper className={classes.paper}>
      <AppBar
        className={classes.searchBar}
        position="static"
        color="default"
        elevation={0}
      >
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <SearchIcon className={classes.block} color="inherit" />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Search by Crop name, type"
                InputProps={{
                  disableUnderline: true,
                  className: classes.searchInput,
                }}
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                className={classes.addCrop}
                onClick={handleClickOpen}
              >
                Add Crop
              </Button>
              <Tooltip title="Reload">
                <IconButton>
                  <RefreshIcon className={classes.block} color="inherit" />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {/* Add crop form modal */}
      <div>
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          onBackdropClick="false"
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Add Crop
          </DialogTitle>
          <DialogContent dividers>
            <AddCrop />
          </DialogContent>
        </Dialog>
      </div>
      <div className={classes.contentWrapper}>
        <Typography color="textSecondary" align="center">
          No Crop data yet
        </Typography>
        <CropsTable />
      </div>
    </Paper>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
