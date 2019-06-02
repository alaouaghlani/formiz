import React from 'react';
import { Formiz, FormizStep, useFormiz } from '@formiz/core';

const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

const Input = (props) => {
  const {
    value, setValue, errorMessage, isValid,
  } = useFormiz(props);
  const { label } = props; // eslint-disable-line

  return (
    <div className="form-group">
      <label style={{ display: 'block' }}>
        {label}
      </label>
      <input
        className={`form-control ${!isValid ? 'is-invalid' : ''}`}
        style={{ borderColor: isValid ? null : 'red' }}
        defaultValue={value}
        onChange={e => setValue(e.target.value.trim())}
      />
      {!isValid && (
        <div className="invalid-feedback">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

function App() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [formIsValid, setFormIsValid] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = (values) => {
    setIsLoading(true);
    console.log(values); // eslint-disable-line

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div>
      <div style={{ padding: '2rem' }}>
        <Formiz
          onSubmit={handleSubmit}
        >
          {({
            submit, isValid, isStepValid, nextStep, prevStep, isFirstStep, isLastStep,
          }) => (
            <form className="card">
              <div className="card-body" style={{ minHeight: 200 }}>
                <FormizStep name="step3" order={3}>
                  <Input
                    name="email"
                    label="Email"
                    validations={[
                      {
                        rule: x => !x || emailRegex.test(x),
                        message: 'Invalid email',
                      },
                    ]}
                  />
                </FormizStep>

                <FormizStep name="step1" order={1}>
                  <Input
                    name="name"
                    label="Name"
                    defaultValue="john"
                    validations={[
                      {
                        rule: x => (x || '').toLowerCase() !== 'john',
                        message: 'Not john',
                      },
                      {
                        rule: x => !!x,
                        message: 'Required',
                      },
                    ]}
                  />
                </FormizStep>

                <FormizStep name="step2" order={2}>
                  <button className="btn btn-light btn-sm mb-3" type="button" onClick={() => setIsVisible(!isVisible)}>
                    Toggle Job
                  </button>

                  {isVisible && (
                    <Input
                      name="job"
                      label="Job"
                      validations={[
                        {
                          rule: x => (x || '').toLowerCase() !== 'john',
                          message: 'Not john',
                        },
                        {
                          rule: x => !!x,
                          message: 'Required',
                        },
                      ]}
                    />
                  )}
                </FormizStep>
              </div>

              <div className="card-footer d-flex">
                {!isFirstStep && (
                  <button className="btn btn-link" type="button" onClick={prevStep}>
                    Prev
                  </button>
                )}

                {isLastStep
                  ? (
                    <button className="btn btn-primary ml-auto" type="button" onClick={submit} disabled={!isValid || isLoading}>
                      { isLoading ? 'Loading... ' : 'Submit' }
                    </button>
                  )
                  : (
                    <button className="btn btn-primary ml-auto" type="button" onClick={nextStep} disabled={!isStepValid}>
                      Next
                    </button>
                  )
                }
              </div>
            </form>
          )}
        </Formiz>
      </div>

      <div style={{ padding: '2rem' }}>
        <Formiz
          onSubmit={handleSubmit}
          onValid={() => setFormIsValid(true)}
          onInvalid={() => setFormIsValid(false)}
        >
          <Input
            name="name"
            label="Name"
            defaultValue="john"
            validations={[
              {
                rule: x => (x || '').toLowerCase() !== 'john',
                message: 'Not john',
              },
              {
                rule: x => !!x,
                message: 'Required',
              },
            ]}
          />

          <div>
            <button className="btn btn-light btn-sm mb-3" type="button" onClick={() => setIsVisible(!isVisible)}>
              Toggle Job
            </button>
            {isVisible && (
              <Input
                name="job"
                label="Job"
                validations={[
                  {
                    rule: x => (x || '').toLowerCase() !== 'john',
                    message: 'Not john',
                  },
                  {
                    rule: x => !!x,
                    message: 'Required',
                  },
                ]}
              />
            )}
          </div>

          <button className="btn btn-primary" type="submit" disabled={!formIsValid}>
            Submit
          </button>
        </Formiz>
      </div>

      <div style={{ padding: '2rem' }}>
        <Formiz onSubmit={handleSubmit}>
          <Input name="name" label="Name" />

          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </Formiz>
      </div>
    </div>
  );
}

export default App;
