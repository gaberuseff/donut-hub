import supabase from "./supabase";

export async function getMenu() {
    let { data, error } = await supabase
        .from('menu')
        .select('*')

    if (error) {
        console.log(error);
        throw new Error('There is an error while getting the menu');
    }

    return data;
}

export async function getOrder(id) {
    let { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('id', id)
        .single()

    if (error) {
        console.log(error);
        throw new Error('Please enter a valid order id');
    }

    return data;
}

export async function createOrder(order) {
    const { data, error } = await supabase
        .from('orders')
        .insert({
            ...order
        })
        .select('id')

    if (error) {
        console.log(error);
        throw new Error('There is an error while creating the order');
    }

    return data;
}

export async function getStaticVariable() {
    let { data, error } = await supabase
        .from('staticVar')
        .select('deliveryPrice')


    if (error) {
        console.log(error);
        throw new Error('There is an error while getting the static variable');
    }

    return data;
}