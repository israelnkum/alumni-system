@extends('layouts.login')
@section('login-content')
    <style>
        .login-card {
            border: 0 solid blue;
            border-bottom-width: 2px;
        }
        input,button, .login-card {
            border-radius: 0 !important;
        }
        .header-text{
            font-size: 20px;
            color: blue;
            text-transform: uppercase;
            font-family: "Gill Sans Extrabold", sans-serif;
        }
        .header-text h3{
            font-weight: bolder !important;
            color: blue;
        }
    </style>
    <div class="container">
    <div class="row justify-content-center pt-5">
        <div class="col-md-4 mt-5">
{{--            <div class="text-center">--}}
{{--                <img src="{{asset('/imgs/logo.jpeg')}}" height="auto" width="100" alt="Logo">--}}
{{--            </div>--}}
            <div class="card login-card p-2">
                <div class="card-header border-primary p-1 bg-white text-center header-text">
                    <h3>Alumni System</h3>
                    <h6>login</h6>
                </div>
                <div class="card-body">
                    <form method="POST" action="{{ route('login') }}">
                        @csrf
                        <div class="form-group row justify-content-center">
                            <div class="col-md-12 mb-2">
                                <label for="username" class="mb-0">{{ __('Username') }}</label>
                                <input id="username" type="text" class="form-control @error('username') is-invalid @enderror" name="username" value="{{ old('username') }}" required autocomplete="username" autofocus>

                                @error('username')
                                <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                            <div class="col-md-12 mb-2">
                                <label for="password" class="mb-0">{{ __('Password') }}</label>
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                            <div class="col-md-12 ">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                    <label class="form-check-label" for="remember">
                                        {{ __('Remember Me') }}
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-12 mb-2">
                                <button type="submit" class="btn  btn-block btn-primary">
                                    {{ __('Login') }}
                                </button>
                               {{-- @if (Route::has('password.request'))
                                    <a class="btn btn-link" href="{{ route('password.request') }}">
                                        {{ __('Forgot Your Password?') }}
                                    </a>
                                @endif--}}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
