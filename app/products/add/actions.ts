"use server";

const MAX_FILE_SIZE = 1024 * 1024 * 5;

export async function uploadProduct(formData: FormData) {
    const data = {
        photo: formData.get('photo') as File,
        title: formData.get('title'),
        price: formData.get('price'),
        description: formData.get('description'),
    }

    if (!data.photo.type.startsWith("image/")) {
        return {
            error: "only image"
        }
    }
    if (data.photo.size > MAX_FILE_SIZE) {
        return {
            error: "ovew 5MB"
        }
    }

    console.log(data);
}