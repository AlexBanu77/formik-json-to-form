import React from "react";
import { Formik, Form, Field, useField, useFormikContext, FieldArray } from "formik";
import * as Yup from "yup";
import { TextInput, CheckBox, NumberInput, OptionSelect, RadioInput } from "./FormFields";


const myJson = {
    firstInput: "Hey mom!",
    firstCheckBox: true,
    firstNumber: 55,
    firstSelect: ""
}

const getInitialValues = (myJson) => {
    const objectFieldsAsArray = Object.keys(myJson).map( (key) => { return {[key]:myJson[key]}})
    return {fields: objectFieldsAsArray};
}

const RenderMyField = ({ children, ...props}) => {
    const {field} = children.props;
    switch (typeof field[Object.keys(field)[0]]){
        case "number":
            return (
                <NumberInput 
                    label="Insert Number"
                    name={props.name}
                    min="0"
                    max="1000"
                    type="number"
                />
            );
        case "string":
            return (
                <TextInput 
                    label="Insert Text"
                    name={props.name}
                    type="text"
                    placeholder="Write me!"
                />
            );
        case "boolean":
            return (
                <CheckBox label="I Hereby Accept to Code!" name={props.name}/>
            );
    }
}

//TODO: Validation Schema!

const App = () => {
    
    const initialValues = getInitialValues(myJson);
    return (
        <>
            <Formik
                initialValues={initialValues}
                // validationSchema={Yup.object({
                //     firstInput: Yup.string()
                //         .required("Hey, you missed me!"),
                //     firstCheckBox: Yup.boolean(),
                //         // .oneOf([true], "You must check this box!")
                //     firstNumber: Yup.number()
                //         .min(0, "Too low!")
                //         .max(1000, "Too high!")
                // })}
                onSubmit={values => console.log(values)}
            >
                
                {({ values }) => (
                    <Form>
                        <FieldArray
                            name="fields"
                            render={arrayHelpers => (
                                <div>
                                    {values.fields.map((field, index) => ( // field={firstInput="Hey mom!"}
                                        <div key={index}>
                                            <RenderMyField name={`fields[${index}].${Object.keys(field)[0]}`}>
                                                <div field={field}></div>
                                            </RenderMyField>
                                        </div>
                                    ))}
                                    <div>
                                        <button type="submit">Submit</button>
                                    </div>
                                </div>
                            )} 
                        />
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default App;
