import {useState, useCallback} from 'react';
import "./Form.css"

function Form() {
    const [error, setError] = useState("");
    const [preview, setPreview] = useState(null);

    const handleFile = useCallback((file) => {
        const validTypes = ["image/jpeg", "image/png", "image/gif"];
        if (!validTypes.includes(file.type)) {
            setError("only jpeg, png, and gif files are allowed");
            return;
        }
        if (file.size > 500 * 1024) {
            setError("Maximum file size is 500KB");
            return;
        }

        setError("");
        const reader = new FileReader();
        reader.onload = () => setPreview(reader.result);
        reader.readAsDataURL(file);

    }, []);

    return (
        <>
            
            
        </>
    );
}

export default Form;