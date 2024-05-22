type ResponseStatus = {
    status: "success" | "error";
    message: string;
};

let response: ResponseStatus;

response = { status: "success", message: "Dữ liệu đã được tải thành công." }; // hoặc "error"

console.log("Trạng thái:", response.status);
console.log("Thông báo:", response.message);
