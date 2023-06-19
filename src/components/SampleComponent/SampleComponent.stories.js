import React from 'react';
import SampleComponent from "./SampleComponent";

export default {
    title: 'components/SampleComponent',
    component: SampleComponent,
};

export const Basic = args => <SampleComponent {...args} />;