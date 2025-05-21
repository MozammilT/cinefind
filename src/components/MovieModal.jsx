import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

export default function AlertDialog({ open, handleClose, movie }) {
  if (!movie) return null;
  const { title, overview } = movie;

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      slotProps={{
        paper: {
          sx: {
            borderRadius: "1rem",
            backgroundColor: "#0f0d23",
          },
        },
        backdrop: { className: "dialog-backdrop" },
      }}
    >
      <DialogContent className="dialog-content">
        <div id="alert-dialog-description">
          <div className="overview-title">{title}</div>
          <br />
          <div className="overview-detail">{overview}</div>
        </div>
      </DialogContent>
      <DialogActions className="dialog-action">
        <button onClick={handleClose} className="close-btn">
          Close
        </button>
      </DialogActions>
    </Dialog>
  );
}
