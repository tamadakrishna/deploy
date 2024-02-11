import { NextResponse } from 'next/server'
import Address from '../../model/address';
import dbConnect from '../../../config/dbConnect'

export async function GET(request) {
        dbConnect();
        const address = await Address.find();

        if(address)
        return NextResponse.json(address)
}



