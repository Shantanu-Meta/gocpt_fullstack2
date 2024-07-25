let result
document.getElementById("upload-button").addEventListener("click", async function(event) {
  event.preventDefault();
  console.log("lol")
    const formData = new FormData();
    const fileInput = document.getElementById("file-upload");
    console.log(fileInput)
    formData.append("file", fileInput.files[0]);
    
    const token = localStorage.getItem("user_token"); // Replace with the actual JWT token
  
    try {
      const response = await fetch("http://localhost:3000/api/v1/account/upload", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`
        },
        body: formData
      });
      
      result = await response.json();
      console.log(result);
      alert("File uploaded successfully")
      document.getElementById('response2').textContent = result.response2;
      document.getElementById('response4').textContent = result.response4;
      document.getElementById('response6').textContent = result.response6;
      document.getElementById('mdm_value').textContent = result.mdm_value;
    } catch (error) {
      alert("Error uploading file:", error);
    }
  });


  document.getElementById("nep-submit").addEventListener("click", async function(event) {
    event.preventDefault();
    console.log(result.mdm_value)
    const input = document.getElementById("nep-dropdown").value;
    const mdm = result.mdm_value
    const token = localStorage.getItem("user_token"); // Replace with the actual JWT token

    try {
      const response = await fetch("http://localhost:3000/api/v1/account/code1", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ mdm, input })
      });
      
      const result = await response.json();
      console.log(result);
      alert("Retrieved data")
      document.getElementById('nep-value').textContent = result.hcpcs_code;
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  });
  
  document.getElementById("gcpu-submit").addEventListener("click", async function(event) {
    event.preventDefault();
    const input = document.getElementById("gcpu-dropdown").value;
    const token = localStorage.getItem("user_token"); // Replace with the actual JWT token

    try {
      const response = await fetch("http://localhost:3000/api/v1/account/code2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ input }) // Convert the data to JSON string format
      });
      
      const result = await response.json();
      console.log(result);
  
      // Display the HCPCS code if needed
      if (result.hcpcs_code) {
        alert(`HCPCS Code: ${result.hcpcs_code}`);
      } else {
        alert(result.message || "Unknown error occurred");
      }
      document.getElementById('gcpu-value').textContent = result.hcpcs_code;
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  });
  
  