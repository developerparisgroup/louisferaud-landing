import React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import MuiPhoneInput from 'material-ui-phone-number';
import { Button, Segment } from 'semantic-ui-react';

const SubscribeForm = () => {

    return (
        <Segment basic style={{ transform: 'scale(1.5)' }}>

            <Stack spacing={2}>

                <Stack spacing={2} direction="row">
                    <TextField fullWidth placeholder='Your Name' variant="standard" />
                    <TextField fullWidth type='date' placeholder='Your Birthday' variant="standard" />
                </Stack>

                <MuiPhoneInput
                    defaultCountry='ae'
                    fullWidth
                    placeholder='Your Phone Number'
                    regions={['north-america', 'south-america', 'central-america', 'carribean', 'european-union', 'ex-ussr', 'middle-east', 'north-africa']}
                />

                <TextField fullWidth type="email" placeholder='Your Email' variant="standard" />

                <Button fluid style={{ marginTop: '1vh', background: "#E3E3E3", border: "1px solid #000000" }} content={"NOTIFY ME"} />
            </Stack>
        </Segment>
    );
};


export default SubscribeForm;