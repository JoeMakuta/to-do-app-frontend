export const inputTask = ({ label }: { label: any }) => {
    return (
        <div>
            <label htmlFor={label}></label>
            <input type="text" />
        </div>
    );
};