
type TStatuses = "idle" | "pending" | "loaded";

interface IPropType {
  status: TStatuses;
  handleUpdateStatus?: (status: TStatuses) => void;
}

const PermissionsComponent = ({ status, handleUpdateStatus }: IPropType) => {
  return (
    <div>
      <h1>{status}</h1>

      {handleUpdateStatus && (
        <>
          <button onClick={() => handleUpdateStatus("pending")}>Pending State</button>
          <button onClick={() => handleUpdateStatus("loaded")}>Loaded State</button>
        </>
      )}
    </div>
  );
};

PermissionsComponent.defaultProps = {
  status: "Idle"
};

export default PermissionsComponent;
