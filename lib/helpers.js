export function validateFields(...fields) {
    return fields.every(f => f.length > 0);
}
